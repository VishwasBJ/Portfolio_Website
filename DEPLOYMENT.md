# Deployment Guide for Vishwas B J Portfolio

## Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy via GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Your site will be live at: `https://your-project.vercel.app`

3. **Deploy via CLI**:
   ```bash
   vercel
   ```
   Follow the prompts and your site will be deployed instantly.

### Option 2: Netlify

1. **Deploy via GitHub**:
   - Push your code to GitHub
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings are already configured in `netlify.toml`
   - Click "Deploy site"
   - Your site will be live at: `https://your-site.netlify.app`

2. **Deploy via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   npm run build
   netlify deploy --prod
   ```

### Option 3: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Update package.json**:
   Add these lines to your `package.json`:
   ```json
   "homepage": "https://VishwasBJ.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```
   Your site will be live at: `https://VishwasBJ.github.io/portfolio`

## Before Deployment Checklist

- [ ] Add your actual resume PDF to `public/resume.pdf`
- [ ] Update all personal links (GitHub, LinkedIn, Email, Phone)
- [ ] Test the build locally: `npm run build && npm run preview`
- [ ] Check all animations work properly
- [ ] Verify all sections display correctly
- [ ] Test on mobile devices

## Custom Domain Setup

### For Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### For Netlify:
1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration steps

## Environment Variables

If you need to add environment variables:

### Vercel:
- Go to Project Settings → Environment Variables
- Add your variables

### Netlify:
- Go to Site Settings → Build & Deploy → Environment
- Add your variables

## Post-Deployment

After deployment, your portfolio will be live at one of these URLs:
- Vercel: `https://vishwas-portfolio.vercel.app`
- Netlify: `https://vishwas-portfolio.netlify.app`
- GitHub Pages: `https://VishwasBJ.github.io/portfolio`

## Updating Your Site

To update your deployed site:
1. Make changes locally
2. Commit and push to GitHub
3. Vercel/Netlify will auto-deploy
4. For GitHub Pages, run `npm run deploy`

## Support

If you encounter issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- GitHub Pages: [pages.github.com](https://pages.github.com)

## Your Portfolio Features

✅ Futuristic robotic background with animations
✅ Animated tech skill icons
✅ Project showcase with custom animations
✅ Certifications section
✅ Resume download functionality
✅ Responsive design
✅ Professional anime-style about section
✅ Contact information with social links

Good luck with your portfolio! 🚀
