# 🎯 OpenSource@UM6P Website - User Guide

## 🌐 Accessing the Website

### Development Mode (Currently Running)

The website is **currently running** at:

```
http://localhost:5173
```

Open your web browser and navigate to this URL to see the website in action!

---

## 📖 Navigation Guide

### Main Navigation Bar

The top navigation bar is always visible and contains:

1. **Logo** (left) - Click to return to catalog
2. **Catalog** - Browse all projects
3. **Ranking** - See community favorites
4. **About** - Learn about the initiative
5. **Add Yours** - Submit a new project
6. **Contribute** - Learn how to contribute

---

## 📚 Page-by-Page Guide

### 1. Catalog Page (Home)

**What You'll See:**
- A hero section with the title and description
- A search bar to find projects
- "Show Filters" button to reveal filtering options
- Project cards in a grid layout

**How to Use:**

#### Search
1. Type in the search bar
2. Search works across:
   - Project names
   - Descriptions
   - Owners
   - Units
   - Tags

#### Filter Projects
1. Click "Show Filters" button
2. Select filters from dropdowns:
   - **Domain**: Subject area (AI, Climate, etc.)
   - **Type**: library, tool, dataset, model, etc.
   - **Platform**: GitHub, GitLab, PyPI, etc.
   - **Unit**: UM6P department/center
   - **Status**: active, maintenance, archived, experimental
   - **Language**: Programming language
   - **License**: Open source license
   - **Tags**: Click multiple tags to filter

3. Click "Clear all filters" to reset

#### Sort Projects
Use the dropdown on the right to sort by:
- Newest first (default)
- Alphabetical (A-Z)
- Recently created (by creation date)

#### View Project Details
Each project card shows:
- Project name (click to visit repository)
- Platform icon
- Description
- Badges (type, domain, language, status)
- Tags
- Owner, Unit, License
- DOI link (if available)

---

### 2. Ranking Page

**What You'll See:**
- Two ranking sections
- Projects with upvote buttons

**How to Use:**

#### Community Top Picks
1. Browse projects ranked by community upvotes
2. Click the 👍 button to upvote a project
3. You can only vote once per project
4. Your votes are saved in your browser

#### GitHub Stars
- View projects ranked by GitHub stars
- See star counts for each project

---

### 3. About Page

**What You'll Find:**
- What is OpenSource@UM6P?
- Why this catalog exists
- Who maintains it
- How to get involved
- Catalog statistics

**Interactive Elements:**
- Links to get involved
- Statistics showing:
  - Total projects
  - Number of domains
  - Number of units
  - Active projects

---

### 4. Add Yours Page

**Purpose**: Submit a new open-source project

**How to Submit:**

1. Fill out the form with project details:
   - **Required fields** (marked with *)
     - Project name
     - Description
     - Main URL
     - Platform
     - Type
     - Domain
     - Owner
     - Unit
     - Language
     - License
     - Status
     - Creation date
     - Contact email
   
   - **Optional fields**
     - Tags
     - DOI

2. Click "Submit Project"

3. You'll see a success message

**Alternative Method:**
- Click the link to contribute via GitHub
- Edit `software.json` directly
- Submit a Pull Request

---

### 5. Contribute Page

**What You'll Find:**
- Ways to contribute
- Step-by-step GitHub contribution guide
- How to propose new domains
- Community guidelines

**Use Cases:**
- Learn how to add projects
- Update existing metadata
- Propose new categories
- Report issues

---

## 🎨 UI Elements Guide

### Badges

**Type Badge** (Primary Blue)
- Shows project type: library, tool, dataset, etc.

**Domain Badge** (Purple)
- Shows the main subject area

**Language Badge** (Blue)
- Programming language used

**Status Badge** (Color-coded)
- 🟢 Green: Active
- 🟡 Yellow: Maintenance
- ⚫ Gray: Archived
- 🟠 Orange: Experimental

### Platform Icons

Each project has a colored icon representing its platform:
- **GitHub**: Gray octagon
- **GitLab**: Orange
- **PyPI**: Blue
- **Zenodo**: Indigo
- **Hugging Face**: Yellow
- **Website**: Purple globe
- And more...

### Buttons

**Primary Button** (Blue)
- Main actions: Submit, Add Project

**Secondary Button** (White with border)
- Less important actions: Show Filters, Clear

### Cards

**Project Cards**
- Hover to see subtle shadow effect
- Click project name to visit repository
- Click DOI to view publication

---

## 💡 Tips & Tricks

### Search Tips
- Search is case-insensitive
- Searches across multiple fields simultaneously
- Use specific keywords for better results

### Filter Tips
- Combine multiple filters for precise results
- Use tags for topic-based searching
- Clear filters to see all projects again

### Upvoting Tips
- Upvote projects you find useful
- Help the community discover great tools
- Votes are stored locally in your browser

### Mobile Usage
- Tap the hamburger menu (☰) for navigation
- All features work on mobile
- Filters are stacked vertically for easier selection

---

## 🔍 Example Workflows

### Finding Climate-Related Python Projects

1. Go to Catalog page
2. Click "Show Filters"
3. Select "Climate, Weather & Atmospheric Science" from Domain
4. Select "Python" from Language
5. Browse results

### Discovering Most Popular Projects

1. Go to Ranking page
2. Scroll through Community Top Picks
3. Click 👍 on projects you like
4. Visit project links to learn more

### Submitting Your Project

1. Go to Add Yours page
2. Fill out the form completely
3. Make sure to include:
   - Valid GitHub/GitLab URL
   - Open source license
   - UM6P affiliation
4. Click Submit
5. Wait for review

### Contributing via GitHub

1. Go to Contribute page
2. Follow the step-by-step guide
3. Clone the repository
4. Edit `catalog/software.json`
5. Submit Pull Request

---

## ⌨️ Keyboard Shortcuts

- **Tab**: Navigate between form fields
- **Enter**: Submit forms
- **Esc**: Close modals (future feature)
- **Ctrl/Cmd + F**: Use browser search

---

## 📱 Mobile Experience

### Features on Mobile:
✅ Responsive navigation with hamburger menu
✅ Touch-friendly buttons and cards
✅ Vertical filter layout
✅ Optimized card grid (1 column)
✅ Mobile-friendly forms

### Best Practices:
- Use portrait mode for forms
- Use landscape for browsing catalog
- Pull to refresh (browser feature)

---

## 🎯 Common Actions

| Action | Steps |
|--------|-------|
| Browse all projects | Go to Catalog |
| Search for a project | Use search bar on Catalog |
| Filter by domain | Show Filters → Select Domain |
| Upvote a project | Ranking → Click 👍 |
| Submit new project | Add Yours → Fill form → Submit |
| Learn about initiative | Go to About page |
| Contribute | Go to Contribute page |

---

## ❓ Troubleshooting

### Website Not Loading?
- Check that dev server is running: `npm run dev`
- Verify URL: `http://localhost:5173`
- Try refreshing the browser

### Search Not Working?
- Check your spelling
- Try broader keywords
- Clear all filters

### Can't Upvote?
- You may have already voted for this project
- Check for confirmation message

### Form Won't Submit?
- Fill all required fields (marked with *)
- Check URL format (must start with http:// or https://)
- Ensure valid email format

---

## 🎉 Features Summary

✅ **23 Projects** loaded from catalog
✅ **8 Filter Categories** for precise search
✅ **Real-time Results** as you type
✅ **Community Upvoting** system
✅ **Project Submission** form
✅ **Responsive Design** for all devices
✅ **Beautiful UI** with smooth animations

---

## 🔗 External Links

From the website, you can visit:
- UM6P Official Website
- GitHub Repository
- Discord Community
- Individual project repositories
- Project DOIs

---

## 📞 Getting Help

If you need assistance:
1. Check this guide
2. Review SETUP.md for technical issues
3. Visit the GitHub repository
4. Join Discord community
5. Open an issue on GitHub

---

**Enjoy exploring UM6P's open-source projects! 🚀**
