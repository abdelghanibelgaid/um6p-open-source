# Netlify Functions - Quick Reference

## Start Dev Server
```bash
npm run netlify:dev
```
→ Open http://localhost:8888

## Test Functions
```bash
# All functions
npm run test:functions

# Individual functions
curl http://localhost:8888/.netlify/functions/check-updates
curl http://localhost:8888/.netlify/functions/rank-by-stars
```

## Deploy
```bash
npm run netlify:deploy
```

## Available Functions

| Function | Endpoint | Purpose |
|----------|----------|---------|
| `check-updates` | GET | Check if software.json updated on GitHub |
| `rank-by-stars` | GET | Get repos ranked by stars |
| `fetch-github-stats` | POST | Get detailed GitHub stats |

## Frontend Integration

```javascript
// In Vue component
import { useProjectStore } from '@/stores/projectStore'

const store = useProjectStore()

// Check for updates
const result = await store.checkUpdates()

// Fetch star rankings
await store.fetchStarRankings()

// Access star count
const stars = store.getStarCount('ProjectName')
```

## Environment Variables

**Production (Netlify Dashboard):**
- `GITHUB_TOKEN` = `ghp_your_token`

**Local (.env file):**
```
GITHUB_TOKEN=ghp_your_token
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Permission denied | Use `npm run netlify:dev` (no sudo) |
| Port 8888 in use | `pkill -f "netlify dev"` |
| Functions not loading | Check `netlify.toml` exists |
| Rate limit | Add `GITHUB_TOKEN` |

## Quick Links

- 📖 [Getting Started](./GETTING_STARTED.md)
- 🚀 [Setup Guide](./NETLIFY_SETUP.md)
- 📚 [Full Documentation](./NETLIFY_FUNCTIONS.md)
- ✅ [Success Report](./NETLIFY_SUCCESS.md)

## Scripts

```bash
npm run dev              # Vite only
npm run netlify:dev      # Vite + Functions ⭐
npm run build            # Build for production
npm run netlify:deploy   # Deploy to Netlify
npm run test:functions   # Test functions
```

---

**Ready to go!** Just run `npm run netlify:dev` and open http://localhost:8888
