# 🚀 Quick Reference - OpenSource@UM6P Website

## Development Server

```bash
cd /home/zmahmoud/Desktop/oss-um6p/website
npm run dev
```

**URL**: http://localhost:5173

## Project Structure

```
website/
├── src/
│   ├── components/        # Reusable components
│   ├── views/            # Page components
│   ├── stores/           # State management
│   ├── router/           # Routing
│   └── data/             # Project data (software.json)
├── package.json
└── vite.config.js
```

## Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/catalog` | Catalog.vue | Browse all projects |
| `/ranking` | Ranking.vue | Community rankings |
| `/about` | About.vue | About the initiative |
| `/add-yours` | AddYours.vue | Submit new project |
| `/contribute` | Contribute.vue | Contribution guide |

## Key Files

- **Data**: `src/data/software.json` - Project catalog
- **Store**: `src/stores/projectStore.js` - State management
- **Router**: `src/router/index.js` - Route configuration
- **Styles**: `src/style.css` - Global styles (Tailwind)

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Features

✅ Search & Filter projects
✅ Multi-select tags
✅ Community upvoting
✅ Project submission form
✅ Responsive design
✅ Smooth animations

## Tech Stack

- Vue.js 3
- Vite 5
- TailwindCSS
- Vue Router
- Pinia

## Update Data

```bash
cp ../um6p-open-source/catalog/software.json src/data/software.json
```

## Deploy

Build output goes to `dist/` directory:

```bash
npm run build
# Deploy dist/ to your hosting service
```

## Support

- GitHub: https://github.com/abdelghanibelgaid/um6p-open-source
- Discord: https://discord.gg/gxWZRF5x8R
