# OpenSource@UM6P Website - Setup Guide

This guide will help you set up and run the OpenSource@UM6P website locally.

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- Git

## Quick Start

### 1. Navigate to the website directory

```bash
cd /home/zmahmoud/Desktop/oss-um6p/website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The website will be available at `http://localhost:5173/`

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server with hot module replacement (HMR).

### Build

```bash
npm run build
```

Builds the application for production. Output will be in the `dist/` directory.

### Preview

```bash
npm run preview
```

Preview the production build locally.

## Project Structure

```
website/
├── src/
│   ├── components/           # Reusable Vue components
│   │   ├── Navbar.vue       # Navigation bar
│   │   ├── Footer.vue       # Footer component
│   │   ├── ProjectCard.vue  # Project card component
│   │   └── PlatformIcon.vue # Platform icons
│   ├── layouts/             # Layout components
│   │   └── MainLayout.vue   # Main layout wrapper
│   ├── views/               # Page components (routes)
│   │   ├── Catalog.vue      # Main catalog page
│   │   ├── Ranking.vue      # Rankings page
│   │   ├── About.vue        # About page
│   │   ├── AddYours.vue     # Project submission form
│   │   └── Contribute.vue   # Contribution guide
│   ├── stores/              # Pinia state management
│   │   └── projectStore.js  # Project data store
│   ├── router/              # Vue Router
│   │   └── index.js         # Route configuration
│   ├── data/                # Static data
│   │   └── software.json    # Project catalog data
│   ├── App.vue              # Root component
│   ├── main.js              # Application entry point
│   └── style.css            # Global styles (Tailwind)
├── public/                   # Static assets
├── index.html               # HTML entry point
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── README.md                # Documentation
```

## Features

### 1. Catalog Page
- **Search**: Full-text search across project names, descriptions, owners, units, and tags
- **Filters**: 
  - Domain
  - Type (library, tool, dataset, model, etc.)
  - Platform (GitHub, GitLab, PyPI, etc.)
  - Unit
  - Status (active, maintenance, archived, experimental)
  - Language
  - License
  - Tags (multi-select)
- **Sorting**: Newest first, Alphabetical, Recently created
- **Project Cards**: Display comprehensive project information

### 2. Ranking Page
- **Community Top Picks**: Projects ranked by upvotes
- **GitHub Stars**: Projects ranked by star count (mock data for now)
- **Upvoting**: One vote per project per user (stored in localStorage)

### 3. About Page
- Information about the initiative
- Catalog statistics
- How to get involved

### 4. Add Yours Page
- Form to submit new projects
- All required fields with validation
- Success message after submission
- Link to GitHub alternative

### 5. Contribute Page
- Ways to contribute
- GitHub workflow guide
- Domain proposal process
- Community guidelines

## Data Management

### Updating the Catalog

The project data is stored in `src/data/software.json`. To update it:

```bash
# From the website directory
cp ../um6p-open-source/catalog/software.json src/data/software.json
```

### Adding New Projects

Projects can be added in two ways:

1. **Via the website**: Use the "Add Yours" page form
2. **Via GitHub**: Edit `software.json` and submit a PR to the main repository

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* ... */ },
      accent: { /* ... */ }
    }
  }
}
```

### Navigation

Edit `src/components/Navbar.vue` to modify navigation items.

### Footer Links

Edit `src/components/Footer.vue` to update footer content.

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
# Build the project
npm run build

# Navigate to dist
cd dist

# Initialize git and deploy
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:USERNAME/REPO.git main:gh-pages
```

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Troubleshooting

### Port Already in Use

If port 5173 is already in use:

```bash
# Kill the process using port 5173
npx kill-port 5173

# Or specify a different port
vite --port 3000
```

### Build Errors

Clear node_modules and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### CSS Not Loading

Make sure PostCSS and Tailwind are properly configured:

```bash
npm install -D tailwindcss postcss autoprefixer
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lazy loading for images
- Code splitting via Vue Router
- Optimized production builds
- Minimal bundle size

## Contributing

See the main repository's [CONTRIBUTING.md](https://github.com/abdelghanibelgaid/um6p-open-source/blob/main/CONTRIBUTING.md) for contribution guidelines.

## License

MIT License - see [LICENSE](../um6p-open-source/LICENSE)

## Support

- **GitHub Issues**: [Report issues](https://github.com/abdelghanibelgaid/um6p-open-source/issues)
- **Discord**: [Join our community](https://discord.gg/gxWZRF5x8R)

---

Made with ❤️ by the Open Source UM6P Community
