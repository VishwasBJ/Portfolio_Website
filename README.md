# Portfolio Website

A modern, creative portfolio website built with React and Vite.

## Features

- Smooth animations and transitions
- Parallax scrolling effects
- Responsive design
- Interactive skill cards
- Project showcase with animated icons
- Certifications section
- Contact section with social links
- Futuristic robotic background theme

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Adding Your Resume

To add your resume PDF:

1. Place your resume PDF file in the `public` folder
2. Rename it to `resume.pdf` OR
3. Update the file path in:
   - `src/App.jsx` (line with `href="/resume.pdf"`)
   - `src/components/Hero.jsx` (line with `href="/resume.pdf"`)

The download buttons will automatically use your PDF file.

## Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Build command: `npm run build`
6. Publish directory: `dist`

### Deploy to GitHub Pages
```bash
npm install gh-pages --save-dev
```

Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run:
```bash
npm run deploy
```

## Customization

1. Update personal information in `src/components/Hero.jsx`
2. Modify skills in `src/components/Skills.jsx`
3. Add your projects in `src/components/Projects.jsx`
4. Update certifications in `src/components/Certifications.jsx`
5. Update contact details in `src/components/Contact.jsx`
6. Change colors in `src/index.css` (CSS variables)
7. Add your resume PDF to `public/resume.pdf`

## Tech Stack

- React 18
- Vite
- CSS3 with animations
- Modern JavaScript (ES6+)

## Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          # Your resume PDF (add this)
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── RoboticBg.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
└── package.json
```

## Contact

- Email: vishwasjaj2004@gmail.com
- Phone: +91 7022577494
- GitHub: [VishwasBJ](https://github.com/VishwasBJ)
- LinkedIn: [vishwas-b-j](https://www.linkedin.com/in/vishwas-b-j)
