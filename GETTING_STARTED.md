# Getting Started with Netlify Functions

## Installation (No sudo needed!)

Netlify CLI is already installed as a project dependency. No global installation needed!

## Quick Start

### 1. Run Development Server with Functions

```bash
npm run netlify:dev
```

This will start both:
- Vite dev server (frontend)
- Netlify Functions (serverless backend)

Your site will be at: **http://localhost:8888**

### 2. Test the Functions

Open another terminal and run:

```bash
npm run test:functions
```

Or test manually:

```bash
# Check for updates
curl http://localhost:8888/.netlify/functions/check-updates

# Get GitHub rankings
curl http://localhost:8888/.netlify/functions/rank-by-stars

# Fetch stats
curl -X POST http://localhost:8888/.netlify/functions/fetch-github-stats \
  -H "Content-Type: application/json" \
  -d '{"projects":[{"name":"Test","url":"https://github.com/pyccel/pyccel","platform":"github"}]}'
```

### 3. Test in Browser

1. Open http://localhost:8888
2. Go to Catalog page → should check for updates
3. Go to Ranking page → should show real GitHub stars

## Deploy to Netlify

### Option 1: Connect GitHub (Easiest)

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub → Select your repository
4. Settings auto-detected from `netlify.toml` ✅
5. Click "Deploy site"

Done! Your site is live with functions.

### Option 2: Deploy from Command Line

```bash
# First time: Login and link site
npm run netlify:dev

# Deploy to production
npm run netlify:deploy

# Check deployment status
npm run netlify:status
```

## Add GitHub Token (Optional)

Increases API rate limit from 60 to 5000 requests/hour.

### On Netlify Dashboard:
1. Go to Site settings → Environment variables
2. Click "Add a variable"
3. Key: `GITHUB_TOKEN`
4. Value: `ghp_your_token_here`
5. Save and redeploy

### Create GitHub Token:
1. GitHub.com → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token
4. No scopes needed (for public repos)
5. Copy the token

### For Local Development:

Create `.env` file in website folder:
```bash
GITHUB_TOKEN=ghp_your_token_here
```

## What You Can Do Now

### ✅ Check for Updates
- **Where**: Catalog page
- **What**: Shows notification if software.json changed on GitHub
- **How**: Automatically on page load

### ✅ Real GitHub Stars
- **Where**: Ranking page
- **What**: Shows actual star counts from GitHub
- **How**: Fetched when page loads

### ✅ API Available
All functions accessible at:
```
http://localhost:8888/.netlify/functions/[function-name]
```

## Troubleshooting

### Port 8888 already in use?
```bash
# Kill process on port 8888
pkill -f "netlify dev"

# Or use different port
PORT=9999 npm run netlify:dev
```

### Functions not loading?
Check `netlify.toml` exists in project root with:
```toml
[functions]
  directory = "netlify/functions"
```

### Still seeing permission errors?
You don't need global installation! Just use:
```bash
npm run netlify:dev
```

This uses the local `netlify-cli` installed in `node_modules`.

## Available Scripts

```bash
npm run dev              # Vite only (no functions)
npm run netlify:dev      # Vite + Functions (recommended)
npm run build            # Build for production
npm run netlify:deploy   # Deploy to Netlify
npm run netlify:status   # Check deployment status
npm run test:functions   # Test functions
```

## File Structure

```
website/
├── netlify/
│   └── functions/          # Your serverless functions
│       ├── check-updates.js
│       ├── rank-by-stars.js
│       └── fetch-github-stats.js
├── netlify.toml           # Netlify configuration
└── src/
    ├── services/
    │   └── api.js         # Frontend API calls
    └── stores/
        └── projectStore.js # State management
```

## Next Steps

1. ✅ Test locally with `npm run netlify:dev`
2. ✅ Deploy to Netlify (connect GitHub repo)
3. ✅ Add GITHUB_TOKEN for higher limits
4. ✅ Monitor functions in Netlify dashboard

## Resources

- 📚 [Full Documentation](./NETLIFY_FUNCTIONS.md)
- 🌐 [Netlify Functions Docs](https://docs.netlify.com/functions/overview/)
- 🐙 [GitHub API Docs](https://docs.github.com/rest)

---

**No sudo needed! Everything runs locally in your project.** 🎉
