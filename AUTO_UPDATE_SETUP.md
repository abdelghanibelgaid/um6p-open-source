# Auto-Update Setup Guide

## How It Works

Your website will automatically stay in sync with the GitHub repository:

### 🔄 **Automatic Updates Every Hour**

1. **Scheduled Function** runs every hour (at minute 0)
2. **Checks** if `software.json` changed on GitHub
3. **Triggers** automatic rebuild if updates detected
4. **Syncs** latest data during build process

### 🏗️ **Build-Time Sync**

Every time your site builds (manual or auto-triggered):
1. `prebuild` script fetches latest `software.json` from GitHub
2. Overwrites local file with fresh data
3. Build continues with up-to-date project list

## Setup Instructions

### 1. Enable Scheduled Functions

Scheduled functions are included in all Netlify plans. No action needed!

### 2. Create Build Hook (for auto-rebuild)

1. Go to Netlify Dashboard
2. Site settings → Build & deploy → Build hooks
3. Click "Add build hook"
4. Name: `Auto Update`
5. Branch: `main` (or your default branch)
6. Copy the webhook URL

### 3. Add Environment Variables

Go to Site settings → Environment variables and add:

| Variable | Value | Purpose |
|----------|-------|---------|
| `GITHUB_TOKEN` | `ghp_your_token` | Optional: Increases API rate limit |
| `NETLIFY_BUILD_HOOK` | `https://api.netlify.com/build_hooks/...` | Required: Auto-rebuild URL |

### 4. Deploy

Push your changes:
```bash
git add .
git commit -m "Add auto-update functionality"
git push origin main
```

Netlify will automatically deploy with the new scheduled function.

## Verification

### Check Scheduled Function

1. Netlify Dashboard → Functions tab
2. Look for `scheduled-update`
3. Should show: Schedule: `0 * * * *`

### View Logs

1. Netlify Dashboard → Functions → scheduled-update
2. Check execution logs (after the hour mark)
3. Look for:
   - ✓ "No updates detected" (if no changes)
   - ✓ "Rebuild triggered successfully" (if updates found)

### Manual Test

Test the sync script locally:
```bash
npm run sync
```

Should output:
```
🔄 Syncing software.json from GitHub...
✓ Successfully synced 24 projects
  SHA: abc123...
```

## How to Update Projects

You have two options:

### Option 1: Let It Happen Automatically (Recommended)
1. Update `software.json` in the `um6p-open-source` repo
2. Within 1 hour, scheduled function detects change
3. Automatic rebuild triggered
4. New data appears on site (5-10 min total)

### Option 2: Manual Trigger
1. Update `software.json` in the `um6p-open-source` repo
2. Go to Netlify Dashboard → Deploys
3. Click "Trigger deploy" → "Deploy site"
4. New data appears immediately

## Schedule Customization

Edit `netlify.toml` to change frequency:

```toml
[[functions."scheduled-update".schedule]]
  cron = "0 * * * *"  # Every hour (current)
  # cron = "0 */2 * * *"  # Every 2 hours
  # cron = "0 8,20 * * *"  # At 8am and 8pm
  # cron = "0 0 * * *"  # Once daily at midnight
```

## Costs

- **Scheduled Functions**: Free up to 125k invocations/month
- **Build Minutes**: Free up to 300 min/month (Starter plan)
- **Expected Usage**: ~720 checks/month + rebuilds when needed

Most updates won't trigger rebuilds (only when data changes), so you'll likely use:
- ~720 function invocations (well within free tier)
- ~10-50 build minutes/month (depending on update frequency)

## Troubleshooting

### Scheduled function not running?
- Check Netlify Dashboard → Functions → scheduled-update
- Verify cron expression in `netlify.toml`
- Check function logs for errors

### Build not triggering?
- Verify `NETLIFY_BUILD_HOOK` environment variable is set
- Check the build hook URL is correct
- Look at scheduled function logs for error messages

### Data not updating?
- Check if `prebuild` script ran (in build logs)
- Verify GitHub API is accessible
- Check for rate limit errors (add `GITHUB_TOKEN` if needed)

### Rate limit errors?
- Add `GITHUB_TOKEN` environment variable
- Increases limit from 60 to 5000 requests/hour

## Files Added

```
website/
├── netlify.toml                           # Updated with schedule
├── netlify/functions/
│   └── scheduled-update.js                # Hourly check + rebuild trigger
├── scripts/
│   └── sync-data.js                       # Build-time sync script
└── package.json                           # Added prebuild script
```

## What Happens Now

**Before**: Manual updates required
- ❌ Update `software.json` in repo
- ❌ Copy to website folder
- ❌ Build and deploy
- ❌ Lots of manual work

**After**: Fully automatic
- ✅ Update `software.json` in `um6p-open-source` repo
- ✅ Wait up to 1 hour (or trigger manually)
- ✅ Everything else happens automatically
- ✅ Website always shows latest data

## Summary

🎯 **What you get:**
- Automatic hourly checks for updates
- Auto-rebuild when changes detected
- Always up-to-date project list
- No manual intervention needed

🚀 **Next steps:**
1. Add `NETLIFY_BUILD_HOOK` environment variable
2. Deploy to Netlify
3. Wait for next hour mark
4. Check function logs to verify it's working

---

**That's it! Your website will now automatically stay in sync with GitHub!** 🎉
