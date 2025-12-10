# Netlify Functions Integration Guide

This guide explains how the OpenSource@UM6P website integrates with Netlify Functions to fetch real-time data from GitHub.

## Features

### 1. Update Checker
Automatically checks if `software.json` has been updated in the GitHub repository.

- **When**: On page load (Catalog page)
- **How**: Compares local SHA with remote SHA from GitHub
- **User Experience**: Shows notification banner when updates are available

### 2. GitHub Star Rankings
Fetches real-time star counts for all GitHub repositories.

- **Where**: Ranking page
- **How**: Queries GitHub API for each repository
- **Updates**: Fetched on page load
- **Caching**: Stores results in Pinia store

### 3. Repository Statistics
Gets detailed stats (stars, forks, issues, etc.) for repositories.

- **Available**: Via API service
- **Use Cases**: Future dashboard, detailed project pages

## Architecture

```
┌─────────────────┐
│   Vue Frontend  │
│   (Browser)     │
└────────┬────────┘
         │
         │ HTTP Request
         ▼
┌─────────────────┐
│ Netlify Edge    │
│ (CDN)           │
└────────┬────────┘
         │
         │ Function Call
         ▼
┌─────────────────┐
│ Serverless      │
│ Functions       │
│ (AWS Lambda)    │
└────────┬────────┘
         │
         │ API Request
         ▼
┌─────────────────┐
│ GitHub API      │
│                 │
└─────────────────┘
```

## File Structure

```
website/
├── netlify/
│   └── functions/
│       ├── check-updates.js      # Check for software.json updates
│       ├── fetch-github-stats.js # Get GitHub stats for projects
│       ├── rank-by-stars.js      # Rank projects by stars
│       └── README.md
├── netlify.toml                  # Netlify configuration
└── src/
    ├── services/
    │   └── api.js                # API service layer
    ├── stores/
    │   └── projectStore.js       # Pinia store with API methods
    └── components/
        └── UpdateNotification.vue # Update notification component
```

## Usage in Components

### Check for Updates

```vue
<script setup>
import { onMounted } from 'vue'
import { useProjectStore } from '@/stores/projectStore'

const projectStore = useProjectStore()

onMounted(async () => {
  const result = await projectStore.checkUpdates()
  if (result.updateAvailable) {
    console.log('Updates available!')
  }
})
</script>
```

### Fetch Star Rankings

```vue
<script setup>
import { onMounted } from 'vue'
import { useProjectStore } from '@/stores/projectStore'

const projectStore = useProjectStore()

onMounted(async () => {
  await projectStore.fetchStarRankings()
  // Stars are now available in projectStore.githubStars
})
</script>
```

### Direct API Calls

```javascript
import { checkForUpdates, getRankingByStars, fetchGitHubStats } from '@/services/api'

// Check updates
const updates = await checkForUpdates()

// Get rankings
const rankings = await getRankingByStars()

// Get stats for specific projects
const stats = await fetchGitHubStats(projects)
```

## Configuration

### Environment Variables

Add to Netlify dashboard (Site settings → Environment variables):

```bash
GITHUB_TOKEN=ghp_your_token_here
```

**Benefits:**
- Increases rate limit from 60 to 5000 requests/hour
- Required for private repositories
- Optional for public repositories

### Local Development

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Create `.env` file:
```bash
GITHUB_TOKEN=ghp_your_token_here
```

3. Run dev server:
```bash
netlify dev
```

This runs both Vite and Netlify Functions locally.

## API Endpoints

When deployed, functions are available at:

```
Production: https://your-site.netlify.app/.netlify/functions/[function-name]
Local: http://localhost:8888/.netlify/functions/[function-name]
```

### Available Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/check-updates` | GET | Check for software.json updates |
| `/fetch-github-stats` | POST | Get GitHub stats for projects |
| `/rank-by-stars` | GET | Get all projects ranked by stars |

## Rate Limits

### Without GitHub Token
- **Limit**: 60 requests/hour per IP
- **Good for**: Development, small sites
- **Limitation**: May hit limits with many projects

### With GitHub Token
- **Limit**: 5000 requests/hour
- **Good for**: Production sites
- **Setup**: Add GITHUB_TOKEN environment variable

## Caching Strategy

### Current Implementation
- **Frontend**: Results stored in Pinia store (session-based)
- **No server-side caching**: Each request hits GitHub API

### Recommended for Production
Add caching to Netlify Functions:

```javascript
// Example with 5-minute cache
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes
const cache = new Map()

export async function handler(event, context) {
  const cacheKey = 'rank-by-stars'
  const cached = cache.get(cacheKey)
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.response
  }
  
  // Fetch fresh data...
  const response = { /* ... */ }
  
  cache.set(cacheKey, {
    response,
    timestamp: Date.now()
  })
  
  return response
}
```

## Error Handling

All functions return consistent error responses:

```json
{
  "success": false,
  "error": "Error message"
}
```

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| `403` | Rate limit exceeded | Add GITHUB_TOKEN |
| `404` | Repository not found | Check URL format |
| `500` | Server error | Check function logs |

### Checking Logs

```bash
# View function logs
netlify functions:log [function-name]

# View all logs
netlify logs
```

## Deployment

Functions are automatically deployed with your site:

```bash
# Deploy to production
git push origin main

# Or manual deploy
netlify deploy --prod
```

### Build Settings

Netlify automatically detects the configuration from `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"
  functions = "netlify/functions"
```

## Testing

### Test Locally

```bash
# Start dev server
netlify dev

# Test check-updates
curl http://localhost:8888/.netlify/functions/check-updates

# Test rank-by-stars
curl http://localhost:8888/.netlify/functions/rank-by-stars
```

### Test in Production

```bash
# After deployment
curl https://your-site.netlify.app/.netlify/functions/check-updates
```

## Monitoring

### Function Performance

Check in Netlify dashboard:
- **Functions tab**: See invocation count, duration, errors
- **Logs tab**: View function execution logs
- **Analytics**: Track usage patterns

### Alerts

Set up alerts for:
- High error rates
- Rate limit approaching
- Slow response times

## Future Enhancements

### Planned Features

1. **Webhook Integration**
   - Trigger update on GitHub push
   - Invalidate cache automatically

2. **Advanced Caching**
   - Redis/KV store for persistence
   - Smart cache invalidation

3. **Batch Processing**
   - Process multiple repos in parallel
   - Optimize API quota usage

4. **Analytics**
   - Track popular projects
   - Monitor API usage

## Troubleshooting

### Functions Not Working

1. Check deployment logs:
```bash
netlify logs
```

2. Verify environment variables:
```bash
netlify env:list
```

3. Test function locally:
```bash
netlify functions:serve
```

### CORS Issues

Functions include CORS headers by default:
```javascript
headers: {
  'Access-Control-Allow-Origin': '*'
}
```

For production, restrict to your domain:
```javascript
headers: {
  'Access-Control-Allow-Origin': 'https://your-site.netlify.app'
}
```

## Support

- **Netlify Functions Docs**: https://docs.netlify.com/functions/overview/
- **GitHub API Docs**: https://docs.github.com/rest
- **Project Issues**: https://github.com/UM6POpenSoftwareCommunity/open-source/issues
