# OpenSource@UM6P Website

A modern, responsive web application for browsing and discovering open-source software developed at Mohammed VI Polytechnic University (UM6P).

## 🚀 Features

- **Catalog Browser**: Search and filter through UM6P's open-source projects
- **Advanced Filtering**: Filter by domain, type, platform, unit, status, language, license, and tags
- **Project Rankings**: Community upvotes and GitHub stars rankings
- **Project Submission**: Easy-to-use form for adding new projects
- **Responsive Design**: Beautiful UI that works on desktop and mobile
- **Fast & Modern**: Built with Vue 3, Vite, and TailwindCSS

## 📦 Tech Stack

- **Framework**: Vue.js 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Routing**: Vue Router
- **State Management**: Pinia
- **Icons**: Heroicons (via inline SVG)

## 🛠️ Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
website/
├── src/
│   ├── components/        # Reusable Vue components
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   │   ├── ProjectCard.vue
│   │   └── PlatformIcon.vue
│   ├── layouts/          # Layout components
│   │   └── MainLayout.vue
│   ├── views/            # Page components
│   │   ├── Catalog.vue
│   │   ├── Ranking.vue
│   │   ├── About.vue
│   │   ├── AddYours.vue
│   │   └── Contribute.vue
│   ├── stores/           # Pinia stores
│   │   └── projectStore.js
│   ├── router/           # Vue Router configuration
│   │   └── index.js
│   ├── data/             # Static data files
│   │   └── software.json
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── public/               # Static assets
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Pages

### 1. Catalog
Browse all open-source projects with powerful search and filtering capabilities.

### 2. Ranking
- **Community Top Picks**: Projects ranked by community upvotes
- **GitHub Stars**: Projects ranked by their GitHub star count

### 3. About
Learn more about the OpenSource@UM6P initiative.

### 4. Add Yours
Submit new projects via an easy-to-use web form.

### 5. Contribute
Guidelines for contributing to the catalog via the website or GitHub.

## 🔧 Data Management

The project catalog is stored in `src/data/software.json`. This file is synced with the main [um6p-open-source](https://github.com/UM6POpenSoftwareCommunity/open-source) repository.

### Updating the Catalog

To update the catalog with the latest data from the main repository:

```bash
cp ../um6p-open-source/catalog/software.json src/data/software.json
```

## 💾 Local Storage

The application uses browser localStorage for:
- **Upvotes**: Community votes are stored locally (per user/browser)
- **Vote tracking**: Prevents duplicate voting

## 🎯 Key Features

### Search & Filter
- Full-text search across project names, descriptions, owners, units, and tags
- Multi-select tag filtering
- Dropdown filters for domain, type, platform, unit, status, language, and license
- Real-time result updates

### Project Cards
Each project card displays:
- Project name with external link
- Platform icon
- Short description
- Badges for type, domain, language, and status
- Tags
- Owner, unit, and license information
- DOI link (if available)

### Upvoting System
- One vote per project per user
- Votes persist in localStorage
- Real-time ranking updates
- Visual feedback for voted projects

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates optimized static files in the `dist/` directory.

### Deploy to Static Hosting

The built files can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any static hosting service

### Example: Deploy to GitHub Pages

```bash
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:USERNAME/REPO.git main:gh-pages
```

## 🤝 Contributing

Contributions are welcome! Please see the main repository's [CONTRIBUTING.md](https://github.com/UM6POpenSoftwareCommunity/open-source/blob/main/CONTRIBUTING.md) for guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../um6p-open-source/LICENSE) file for details.

## 🔗 Links

- **Main Repository**: [um6p-open-source](https://github.com/UM6POpenSoftwareCommunity/open-source)
- **UM6P Official Site**: [um6p.ma](https://www.um6p.ma)
- **Discord Community**: [Join Server](https://discord.gg/gxWZRF5x8R)

## 📧 Contact

For questions or suggestions, please open an issue on the main repository or join our Discord community.

---

Made with ❤️ by the Open Source UM6P Community
