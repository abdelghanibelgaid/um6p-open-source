# Quick Setup: Netlify Functions

## What We Added

✅ **3 Serverless Functions**:
- `check-updates.js` - Check for updates in software.json
- `rank-by-stars.js` - Get repositories ranked by GitHub stars
- `fetch-github-stats.js` - Fetch GitHub statistics for projects

✅ **Frontend Integration**:
- API service layer (`src/services/api.js`)
- Updated Pinia store with API methods
- Update notification component
- Auto-check on page load

## Quick Start

### 1. Install Netlify CLI

```bash
npm install -g netlify-cli
```

### 2. Test Locally

```bash
# Run both Vite and Netlify Functions
npm run netlify:dev

# OR
netlify dev
```

Your site will be available at `http://localhost:8888` (not 5173!)

### 3. Test Functions

```bash
# Test the functions
npm run test:functions

# Or manually:
curl http://localhost:8888/.netlify/functions/check-updates
curl http://localhost:8888/.netlify/functions/rank-by-stars
```

### 4. Deploy to Netlify

#### Option A: Connect GitHub Repository
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Build settings are auto-detected from `netlify.toml`
5. Click "Deploy site"

#### Option B: Manual Deploy
```bash
# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

### 5. Add GitHub Token (Optional but Recommended)

To increase rate limits from 60 to 5000 requests/hour:

1. Create GitHub token:
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Generate new token (classic)
   - No scopes needed for public repos
   - Copy the token

2. Add to Netlify:
   - Site settings → Environment variables
   - Add: `GITHUB_TOKEN` = `your_token_here`
   - Redeploy site

## What Each Function Does

### check-updates
- **URL**: `/.netlify/functions/check-updates`
- **Purpose**: Checks if software.json was updated on GitHub
- **When**: Called automatically when Catalog page loads
- **Shows**: Notification banner if updates available

### rank-by-stars
- **URL**: `/.netlify/functions/rank-by-stars`
- **Purpose**: Fetches star counts and ranks all GitHub projects
- **When**: Called when Ranking page loads
- **Shows**: Real-time star counts for each project

### fetch-github-stats
- **URL**: `/.netlify/functions/fetch-github-stats`
- **Purpose**: Gets detailed stats (stars, forks, issues, etc.)
- **When**: Available for future use
- **Returns**: Full repository statistics

## File Structure Created

```
website/
├── netlify.toml                        # Netlify configuration
├── netlify/
│   └── functions/
│       ├── check-updates.js
│       ├── fetch-github-stats.js
│       ├── rank-by-stars.js
│       └── README.md
├── src/
│   ├── services/
│   │   └── api.js                     # API service
│   ├── components/
│   │   └── UpdateNotification.vue      # Update banner
│   └── stores/
│       └── projectStore.js             # Updated with API methods
├── test-functions.js                   # Test script
├── NETLIFY_FUNCTIONS.md               # Detailed documentation
└── NETLIFY_SETUP.md                   # This file
```

## Troubleshooting

### Functions not working locally?
```bash
# Make sure you're using netlify dev, not vite
netlify dev
```

### Rate limit errors?
Add `GITHUB_TOKEN` environment variable (see step 5 above)

### CORS errors?
Functions include CORS headers by default. Check browser console for details.

### Can't find functions after deploy?
- Check Netlify dashboard → Functions tab
- Verify `netlify.toml` is in repository root
- Check build logs for errors

## Testing

### View in Catalog Page
1. Open Catalog page
2. Wait 2-3 seconds
3. Should see update notification if remote data differs

### View in Ranking Page
1. Open Ranking page
2. GitHub stars section should show real star counts
3. Check browser console for any errors

## Next Steps

1. ✅ Deploy to Netlify
2. ✅ Add GITHUB_TOKEN for higher rate limits
3. ✅ Monitor function usage in dashboard
4. 📋 Consider adding caching for production
5. 📋 Set up webhooks for automatic updates

## Resources

- [Netlify Functions Docs](https://docs.netlify.com/functions/overview/)
- [GitHub API Docs](https://docs.github.com/rest)
- [Full Documentation](./NETLIFY_FUNCTIONS.md)
