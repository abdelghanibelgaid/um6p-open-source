# Netlify Functions Setup

This folder contains serverless functions for the OpenSource@UM6P website deployed on Netlify.

## Functions Overview

### 1. `check-updates.js`
Checks for updates in the `software.json` file from the GitHub repository.

**Endpoint:** `/.netlify/functions/check-updates`  
**Method:** GET

**Response:**
```json
{
  "success": true,
  "data": [...], // Full software.json content
  "metadata": {
    "sha": "abc123...",
    "lastUpdate": "2025-12-10T10:00:00Z",
    "projectCount": 24,
    "size": 12345
  }
}
```

### 2. `fetch-github-stats.js`
Fetches GitHub statistics (stars, forks, etc.) for a list of projects.

**Endpoint:** `/.netlify/functions/fetch-github-stats`  
**Method:** POST

**Request Body:**
```json
{
  "projects": [
    {
      "name": "Project Name",
      "url": "https://github.com/user/repo",
      "platform": "github"
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "name": "Project Name",
      "url": "https://github.com/user/repo",
      "stars": 123,
      "forks": 45,
      "watchers": 67,
      "openIssues": 8,
      "language": "Python",
      "license": "MIT",
      "updatedAt": "2025-12-10T10:00:00Z"
    }
  ],
  "metadata": {
    "totalProjects": 24,
    "githubProjects": 18,
    "errors": 0,
    "timestamp": "2025-12-10T10:00:00Z"
  }
}
```

### 3. `rank-by-stars.js`
Fetches all projects from `software.json` and ranks them by GitHub stars.

**Endpoint:** `/.netlify/functions/rank-by-stars`  
**Method:** GET

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "name": "Project Name",
      "description": "...",
      "url": "https://github.com/user/repo",
      "stars": 1234,
      "forks": 123,
      "rank": 1,
      "githubOwner": "user",
      "githubRepo": "repo"
    }
  ],
  "metadata": {
    "totalProjects": 24,
    "githubProjects": 18,
    "rankedProjects": 18,
    "topProject": "Project Name",
    "topStars": 1234,
    "timestamp": "2025-12-10T10:00:00Z"
  }
}
```

## Environment Variables

To increase GitHub API rate limits, add a GitHub token:

1. Create a GitHub Personal Access Token:
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Generate a new token (classic)
   - No special scopes needed for public repos
   - Copy the token

2. Add to Netlify:
   - Go to Site settings → Environment variables
   - Add variable: `GITHUB_TOKEN` = `your_token_here`
   - Save and redeploy

**Rate Limits:**
- Without token: 60 requests/hour
- With token: 5000 requests/hour

## Local Development

To test functions locally:

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Run dev server:
```bash
netlify dev
```

This will run both your Vite frontend and Netlify Functions locally.

3. Test functions:
```bash
# Check updates
curl http://localhost:8888/.netlify/functions/check-updates

# Rank by stars
curl http://localhost:8888/.netlify/functions/rank-by-stars

# Fetch stats
curl -X POST http://localhost:8888/.netlify/functions/fetch-github-stats \
  -H "Content-Type: application/json" \
  -d '{"projects":[{"name":"Test","url":"https://github.com/user/repo","platform":"github"}]}'
```

## Frontend Integration

Use the API service in your Vue components:

```javascript
import { checkForUpdates, getRankingByStars, fetchGitHubStats } from '@/services/api'

// Check for updates
const result = await checkForUpdates()
if (result.success) {
  console.log('Projects:', result.data)
}

// Get rankings
const rankings = await getRankingByStars()
if (rankings.success) {
  console.log('Top project:', rankings.data[0])
}

// Fetch stats for specific projects
const stats = await fetchGitHubStats(projects)
```

## Error Handling

All functions return a consistent error format:

```json
{
  "success": false,
  "error": "Error message here"
}
```

Common errors:
- `404`: Repository not found
- `403`: Rate limit exceeded (add GITHUB_TOKEN)
- `500`: Internal server error

## CORS

All functions are configured with CORS headers to allow requests from any origin:
```javascript
'Access-Control-Allow-Origin': '*'
```

For production, you may want to restrict this to your domain.
