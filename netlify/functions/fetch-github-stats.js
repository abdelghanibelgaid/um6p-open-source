/**
 * Netlify Function: Fetch GitHub statistics for repositories
 * Retrieves star counts, fork counts, and other metrics from GitHub API
 */

const GITHUB_API = 'https://api.github.com';

/**
 * Extract owner and repo from GitHub URL
 */
function parseGitHubUrl(url) {
  const match = url.match(/github\.com\/([^\/]+)\/([^\/\?#]+)/);
  if (!match) return null;
  return {
    owner: match[1],
    repo: match[2].replace(/\.git$/, ''),
  };
}

/**
 * Fetch repository stats from GitHub
 */
async function fetchRepoStats(owner, repo, token = null) {
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'OpenSource-UM6P-Website',
  };

  // Add token if provided (for higher rate limits)
  if (token) {
    headers['Authorization'] = `token ${token}`;
  }

  try {
    const response = await fetch(
      `${GITHUB_API}/repos/${owner}/${repo}`,
      { headers }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return { error: 'Repository not found', status: 404 };
      }
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();

    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      watchers: data.watchers_count,
      openIssues: data.open_issues_count,
      language: data.language,
      license: data.license?.spdx_id || null,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
      pushedAt: data.pushed_at,
      size: data.size,
      defaultBranch: data.default_branch,
      description: data.description,
      homepage: data.homepage,
      topics: data.topics || [],
    };
  } catch (error) {
    console.error(`Error fetching stats for ${owner}/${repo}:`, error);
    return { error: error.message };
  }
}

export async function handler(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const { projects } = JSON.parse(event.body || '{}');

    if (!projects || !Array.isArray(projects)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Invalid request: projects array is required',
        }),
      };
    }

    // Get GitHub token from environment variable (optional)
    const token = process.env.GITHUB_TOKEN;

    // Fetch stats for all GitHub projects
    const statsPromises = projects
      .filter(p => p.platform === 'github' && p.url)
      .map(async (project) => {
        const parsed = parseGitHubUrl(project.url);
        if (!parsed) {
          return {
            name: project.name,
            url: project.url,
            error: 'Invalid GitHub URL',
          };
        }

        const stats = await fetchRepoStats(parsed.owner, parsed.repo, token);
        
        return {
          name: project.name,
          url: project.url,
          owner: parsed.owner,
          repo: parsed.repo,
          ...stats,
        };
      });

    const results = await Promise.all(statsPromises);

    // Sort by stars (descending)
    const rankedResults = results
      .filter(r => !r.error && typeof r.stars === 'number')
      .sort((a, b) => b.stars - a.stars);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        data: rankedResults,
        metadata: {
          totalProjects: projects.length,
          githubProjects: rankedResults.length,
          errors: results.filter(r => r.error).length,
          timestamp: new Date().toISOString(),
        },
      }),
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: error.message,
      }),
    };
  }
}
