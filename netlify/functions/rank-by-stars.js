/**
 * Netlify Function: Rank repositories by GitHub stars
 * Fetches current star counts and returns ranked list
 */

const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'UM6POpenSoftwareCommunity';
const REPO_NAME = 'um6p-open-source';

/**
 * Parse GitHub URL to extract owner and repo
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
 * Fetch star count for a repository
 */
async function fetchStarCount(owner, repo, token = null) {
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'OpenSource-UM6P-Website',
  };

  if (token) {
    headers['Authorization'] = `token ${token}`;
  }

  try {
    const response = await fetch(
      `${GITHUB_API}/repos/${owner}/${repo}`,
      { headers }
    );

    if (!response.ok) {
      return { stars: 0, error: `HTTP ${response.status}` };
    }

    const data = await response.json();
    return {
      stars: data.stargazers_count || 0,
      forks: data.forks_count || 0,
      updatedAt: data.updated_at,
    };
  } catch (error) {
    return { stars: 0, error: error.message };
  }
}

export async function handler(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    // Fetch software.json from GitHub
    const response = await fetch(
      `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/catalog/software.json`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'OpenSource-UM6P-Website',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch software.json: ${response.status}`);
    }

    const fileData = await response.json();
    const content = Buffer.from(fileData.content, 'base64').toString('utf-8');
    const projects = JSON.parse(content);

    // Get GitHub token from environment
    const token = process.env.GITHUB_TOKEN;

    // Filter GitHub projects and fetch star counts
    const githubProjects = projects.filter(p => p.platform === 'github' && p.url);

    const starPromises = githubProjects.map(async (project) => {
      const parsed = parseGitHubUrl(project.url);
      if (!parsed) {
        return {
          ...project,
          stars: 0,
          error: 'Invalid GitHub URL',
        };
      }

      const stats = await fetchStarCount(parsed.owner, parsed.repo, token);
      
      return {
        ...project,
        ...stats,
        githubOwner: parsed.owner,
        githubRepo: parsed.repo,
      };
    });

    const results = await Promise.all(starPromises);

    // Sort by stars (descending)
    const ranked = results
      .filter(p => !p.error)
      .sort((a, b) => b.stars - a.stars);

    // Add rank position
    const rankedWithPosition = ranked.map((project, index) => ({
      ...project,
      rank: index + 1,
    }));

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        data: rankedWithPosition,
        metadata: {
          totalProjects: projects.length,
          githubProjects: githubProjects.length,
          rankedProjects: ranked.length,
          topProject: rankedWithPosition[0]?.name || null,
          topStars: rankedWithPosition[0]?.stars || 0,
          timestamp: new Date().toISOString(),
        },
      }),
    };
  } catch (error) {
    console.error('Error ranking by stars:', error);
    
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
