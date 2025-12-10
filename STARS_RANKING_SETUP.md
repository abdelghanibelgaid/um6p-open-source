# GitHub Stars Ranking Auto-Update

## Overview

The GitHub stars ranking system automatically updates every hour to fetch the latest star counts for all GitHub projects in the catalog.

## How It Works

### 1. **Scheduled Function** (Hourly Execution)

**File**: `netlify/functions/update-stars-ranking.js`

- Runs every hour at minute 0
- Fetches all GitHub projects from the repository
- Queries GitHub API for star counts
- Detects changes in total star count
- Triggers rebuild if stars have changed

**Schedule**: `0 * * * *` (every hour)

### 2. **Build-Time Sync Script**

**File**: `scripts/sync-stars-ranking.js`

- Runs automatically during `npm run build` (via `prebuild` hook)
- Fetches current star counts from GitHub API
- Creates/updates `src/data/stars-ranking.json`
- Sorted by star count (descending)

### 3. **Ranking Page Display**

**File**: `src/views/Ranking.vue`

- Imports star ranking data from local JSON file
- Displays top 20 projects by stars
- Shows star count, forks, watchers
- No API calls needed - data is pre-fetched

## Architecture

```
Every Hour:
┌─────────────────────────────────────────────────┐
│ 1. Scheduled Function (update-stars-ranking.js) │
│    - Fetch GitHub projects from repository      │
│    - Query GitHub API for star counts           │
│    - Calculate total stars                      │
│    - Compare with previous total (LAST_STARS_COUNT) │
└─────────────────────────────────────────────────┘
                       ↓
         ┌─────────────────────────┐
         │ Stars Changed?          │
         └─────────────────────────┘
                Yes ↓         No ↓
      ┌──────────────────┐  [Skip rebuild]
      │ Trigger Rebuild  │
      │ via Build Hook   │
      └──────────────────┘
                ↓
During Build:
┌─────────────────────────────────────────────────┐
│ 2. Pre-Build Script (sync-stars-ranking.js)     │
│    - Fetch latest star counts                   │
│    - Write to src/data/stars-ranking.json       │
│    - Sort by stars descending                   │
└─────────────────────────────────────────────────┘
                ↓
┌─────────────────────────────────────────────────┐
│ 3. Build Process                                 │
│    - Bundle updated JSON file                    │
│    - Deploy to production                        │
└─────────────────────────────────────────────────┘
                ↓
On Website:
┌─────────────────────────────────────────────────┐
│ 4. Ranking Page (Ranking.vue)                    │
│    - Import local stars-ranking.json            │
│    - Display top 20 projects                     │
│    - No API calls needed                         │
└─────────────────────────────────────────────────┘
```

## Data Structure

**stars-ranking.json** format:
```json
[
  {
    "name": "Project Name",
    "url": "https://github.com/owner/repo",
    "description": "Project description",
    "domain": "Research domain",
    "platform": "github",
    "type": "library",
    "status": "active",
    "stars": 384,
    "forks": 62,
    "watchers": 384,
    "language": "Python",
    "license": "MIT",
    "tags": ["tag1", "tag2"],
    "maintainers": [],
    "unit_primary": "Unit name",
    "unit_secondary": null,
    "lastUpdated": "2025-12-10T12:00:00.000Z"
  }
]
```

## Setup Instructions

### 1. Environment Variables

Add these to your Netlify site:

| Variable | Value | Purpose |
|----------|-------|---------|
| `GITHUB_TOKEN` | `ghp_your_token` | Optional: Higher API rate limits |
| `NETLIFY_BUILD_HOOK` | `https://api.netlify.com/build_hooks/...` | Required: Auto-rebuild trigger |
| `LAST_STARS_COUNT` | `540` | Auto-updated: Track star changes |

### 2. Create Build Hook

1. Netlify Dashboard → Build & deploy → Build hooks
2. Click "Add build hook"
3. Name: `Stars Ranking Update`
4. Branch: `main`
5. Copy the webhook URL
6. Add as `NETLIFY_BUILD_HOOK` environment variable

### 3. Deploy

```bash
git add .
git commit -m "Add GitHub stars ranking auto-update"
git push origin main
```

## Manual Testing

### Test Sync Script Locally

```bash
npm run sync:stars
```

Should output:
```
🌟 Syncing GitHub stars ranking...
  Found 12 GitHub projects
✓ Successfully synced 12 projects with stars data
  Total stars: 540
  Top project: pyccel (384 stars)
  Updated: /home/.../src/data/stars-ranking.json
```

### Test Scheduled Function

1. Deploy to Netlify
2. Go to Functions tab
3. Find `update-stars-ranking`
4. Click "Trigger" to manually run
5. Check logs for output

## Monitoring

### Check Function Logs

1. Netlify Dashboard → Functions → `update-stars-ranking`
2. View execution logs
3. Look for:
   - ✅ "Stars ranking updated, rebuild triggered"
   - ✅ "Stars data unchanged"
   - ❌ API errors or rate limits

### Verify Auto-Updates

1. Wait for scheduled execution (every hour at :00)
2. Check function logs for execution time
3. If stars changed → New build should trigger
4. Verify new data appears on `/ranking` page

## Rate Limits

### Without Token
- 60 requests/hour per IP
- May hit limit with 12+ projects

### With Token
- 5,000 requests/hour
- Recommended for production

### Script Behavior
- Adds 100ms delay between requests
- Continues on individual project errors
- Doesn't fail build if sync fails

## Troubleshooting

### Function Not Running?

Check:
- Netlify Dashboard → Functions → `update-stars-ranking`
- Verify schedule: `0 * * * *`
- Check function logs for errors

### Build Not Triggering?

Check:
- `NETLIFY_BUILD_HOOK` environment variable is set
- Build hook URL is correct
- Function logs show "Rebuild triggered"

### No Data on Ranking Page?

Check:
- `src/data/stars-ranking.json` exists
- File contains valid JSON array
- Run `npm run sync:stars` manually

### API Rate Limit Errors?

Solution:
- Add `GITHUB_TOKEN` environment variable
- Increases limit from 60 to 5,000 requests/hour

## Cost Estimate

**Netlify Free Tier:**
- Scheduled Functions: 125k invocations/month (Free)
- Build Minutes: 300 min/month (Free)

**Expected Usage:**
- ~720 function executions/month (1/hour)
- ~10-50 build minutes/month (only when stars change)
- Well within free tier limits

## Files Overview

```
website/
├── netlify/functions/
│   └── update-stars-ranking.js    # Hourly scheduled function
├── scripts/
│   └── sync-stars-ranking.js      # Build-time sync script
├── src/
│   ├── data/
│   │   └── stars-ranking.json     # Generated ranking data
│   └── views/
│       └── Ranking.vue             # Display rankings
├── netlify.toml                    # Scheduled function config
└── package.json                    # Build scripts
```

## Next Steps

1. ✅ Deploy to Netlify
2. ✅ Add environment variables
3. ✅ Create build hook
4. ✅ Wait for first hourly execution
5. ✅ Verify ranking page shows data

---

**That's it!** Your GitHub stars ranking will now update automatically every hour with zero manual intervention! 🌟
