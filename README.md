# 🚀 Showmik Bhowmik - Portfolio Website

A stunning Disney+ inspired portfolio website showcasing my projects, experience, and skills.

## ✨ Features

- **Disney+ Aesthetic**: Modern gradient design with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **Interactive Elements**: Hover effects, scroll animations, and smooth transitions
- **Sections**:
  - Hero section with animated background
  - Featured projects with tech stack badges
  - Professional experience timeline
  - Skills categorized by technology
  - About me with statistics
  - Contact information with social links

## 🛠️ Technologies Used

- HTML5
- CSS3 (with modern animations and gradients)
- Vanilla JavaScript (no frameworks needed!)
- Google Fonts (Poppins)

## 📂 File Structure

```
portfolio-website/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive features and animations
└── README.md          # This file
```

## 🚀 Quick Start

### Option 1: Open Locally

1. Download all files (`index.html`, `styles.css`, `script.js`)
2. Put them in the same folder
3. Double-click `index.html` to open in your browser
4. That's it! 🎉

### Option 2: Deploy to GitHub Pages (Recommended)

#### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name your repository: `your-username.github.io` 
   - Example: `showmikbhowmik.github.io`
   - This special naming makes it your personal GitHub Pages site!
4. Make it **Public**
5. Click **"Create repository"**

#### Step 2: Upload Your Files

**Method A: Using GitHub Website (Easiest)**

1. In your new repository, click **"uploading an existing file"**
2. Drag and drop all 3 files: `index.html`, `styles.css`, `script.js`
3. Add a commit message: "Initial portfolio upload"
4. Click **"Commit changes"**

**Method B: Using Git (If you know Git)**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

#### Step 3: Enable GitHub Pages

1. Go to your repository **Settings**
2. Scroll down to **"Pages"** section (in the left sidebar)
3. Under **"Source"**, select **"Deploy from a branch"**
4. Choose **"main"** branch and **"/ (root)"** folder
5. Click **"Save"**

#### Step 4: Visit Your Site! 🎉

Your site will be live at: `https://your-username.github.io`

It might take 1-2 minutes to go live. Refresh the page if it doesn't load immediately.

## 🎨 Customization Guide

### Change Colors

Open `styles.css` and modify the `:root` variables:

```css
:root {
    --primary-blue: #0063e5;    /* Main accent color */
    --purple: #7b3ff2;          /* Secondary accent */
    --bg-dark: #0a0e1a;         /* Background color */
}
```

### Add More Projects

In `index.html`, find the projects section and duplicate this block:

```html
<div class="project-card" data-project="your-project-name">
    <div class="project-image">
        <div class="project-badge">Badge Name</div>
        <div class="project-overlay">
            <button class="play-btn">
                <!-- SVG code -->
            </button>
        </div>
    </div>
    <div class="project-info">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">Project description here</p>
        <div class="project-tech">
            <span class="tech-tag">Tech 1</span>
            <span class="tech-tag">Tech 2</span>
        </div>
    </div>
</div>
```

### Update Your Info

1. **Hero Section**: Change name and tagline in `index.html`
2. **Experience**: Add/edit timeline items in the experience section
3. **Skills**: Modify skill categories and items
4. **Contact**: Update email, GitHub, LinkedIn links

### Add Your Photo

Replace this section in `index.html`:

```html
<div class="profile-placeholder">
    <div class="profile-initial">S</div>
</div>
```

With:

```html
<div class="profile-placeholder">
    <img src="your-photo.jpg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
</div>
```

## 🐛 Troubleshooting

### Site not loading on GitHub Pages?

- Wait 2-3 minutes after enabling Pages
- Check that your repository is named correctly: `username.github.io`
- Make sure files are in the root folder (not in a subfolder)
- Check that `index.html` is spelled exactly right (lowercase)

### Styling looks broken?

- Make sure all 3 files are in the same folder
- Check that filenames match exactly: `styles.css` and `script.js`

### Changes not showing up?

- Hard refresh your browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear your browser cache
- Wait a few minutes for GitHub Pages to rebuild

## 📝 Next Steps

1. ✅ Deploy to GitHub Pages
2. 📸 Add your actual photo
3. 🔗 Add links to your project GitHub repos
4. 🎨 Customize colors to match your brand
5. 📊 Add Google Analytics (optional)
6. 🔍 Add custom domain (optional)

## 🤝 Questions?

Feel free to:
- Open an issue on GitHub
- Reach out via email: sb4535@g.rit.edu
- Connect on [LinkedIn](https://linkedin.com/in/showmikbhowmik)

## 📄 License

Feel free to use this template for your own portfolio! Just give credit where it's due. 😊

---

**Built with 💙 by Showmik Bhowmik**

*Inspired by Disney+ design aesthetics*
