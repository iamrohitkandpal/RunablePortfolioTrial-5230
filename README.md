# Rohit Kandpal - Portfolio

A clean, modern portfolio website showcasing my work as a Full Stack Developer.

## ✨ Features

- **Modern Design**: Clean interface with beautiful animations
- **Responsive**: Mobile-first design with dark/light theme support
- **Interactive**: Smooth scrolling, carousels, and engaging UI
- **Fast Performance**: Optimized with Vite and code splitting
- **Accessible**: WCAG compliant with keyboard navigation

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **Lucide React** - Beautiful iconography

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Input, etc.)
│   └── ThemeProvider.tsx
├── pages/              # Page components
│   ├── Home.tsx        # Main portfolio page
│   └── ProjectDetail.tsx
├── data/               # Static data
│   └── projects.ts     # Project information
├── lib/                # Utilities
│   └── utils.ts        # Helper functions
└── styles/             # Global styles
    └── globals.css     # Tailwind and custom styles
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm, yarn, or bun

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Customization

### Theme Colors

The project uses a custom color system with CSS variables. Edit `src/styles/globals.css` to customize colors:

```css
:root {
  --background: oklch(0.985 0.008 95);
  --foreground: oklch(0.26 0.03 95);
  /* ... more color variables */
}
```

### Content

- **Personal Info**: Update contact details and social links in `src/pages/Home.tsx`
- **Projects**: Edit `src/data/projects.ts` to add/modify project information
- **Experience**: Update the `experiences` array in `src/pages/Home.tsx`
- **Skills**: Modify the `skills` object in `src/pages/Home.tsx`

### Assets

- Replace `/public/hero-avatar.png` with your photo
- Update `/public/favicon.svg` with your favicon
- Modify SEO metadata in `index.html`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build the project
npm run build

# Deploy the dist/ folder to Netlify
```

### GitHub Pages

```bash
# Build the project
npm run build

# Deploy the dist/ folder to GitHub Pages
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

- **Email**: iamrohitkandpal@gmail.com
- **LinkedIn**: [rohit-kandpal](https://linkedin.com/in/rohit-kandpal)
- **GitHub**: [iamrohitkandpal](https://github.com/iamrohitkandpal)

---

Built with ❤️ by Rohit Kandpal