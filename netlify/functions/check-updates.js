/**
 * Netlify Function: Check for updates in software.json from GitHub
 * Fetches the latest software.json from the um6p-open-source repository
 * and compares it with the current version
 */

const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'UM6POpenSoftwareCommunity';
const REPO_NAME = 'um6p-open-source';
const FILE_PATH = 'catalog/software.json';

export async function handler(event, context) {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    // Fetch the latest software.json from GitHub
    const response = await fetch(
      `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'OpenSource-UM6P-Website',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // Decode base64 content
    const content = Buffer.from(data.content, 'base64').toString('utf-8');
    const softwareData = JSON.parse(content);

    // Get last commit info for this file
    const commitResponse = await fetch(
      `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/commits?path=${FILE_PATH}&per_page=1`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'OpenSource-UM6P-Website',
        },
      }
    );

    const commits = await commitResponse.json();
    const lastUpdate = commits[0]?.commit?.committer?.date || data.sha;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        data: softwareData,
        metadata: {
          sha: data.sha,
          lastUpdate: lastUpdate,
          projectCount: softwareData.length,
          size: data.size,
        },
      }),
    };
  } catch (error) {
    console.error('Error checking updates:', error);
    
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
