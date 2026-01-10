# Architect Portfolio Website

A premium, modern architect portfolio website built with Next.js 16, React 19, and Tailwind CSS 4. The design emphasizes minimalism, precision, and understated luxury with a sophisticated color palette and refined typography.

## 🏗️ Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── layout.jsx               # Root layout with metadata
│   ├── page.jsx                 # Main page component
│   ├── globals.css              # Global styles and design system
│   └── favicon.ico              # Site favicon
├── components/                   # React components
│   ├── Navigation.jsx           # Fixed navigation bar with scroll transition
│   ├── Hero.jsx                 # Full-screen hero section with parallax
│   ├── Projects.jsx             # Projects grid with hover effects
│   ├── About.jsx                # About section with philosophy content
│   ├── Studio.jsx               # Studio section with two-column layout
│   ├── Services.jsx             # Services section (text-focused)
│   ├── Journal.jsx              # Journal/insights section (editorial style)
│   ├── Contact.jsx              # Contact form and information
│   ├── Footer.jsx               # Minimal footer
│   └── ScrollToTop.jsx          # Scroll to top button
├── lib/                          # Utility functions
│   └── utils.js                 # Scroll utilities and intersection observer
├── public/                       # Static assets
├── package.json                  # Dependencies and scripts
├── jsconfig.json                # JavaScript/TypeScript config
├── next.config.mjs              # Next.js configuration
└── README.md                    # This file
```

## 🎨 Design System

### Color Palette
- **Concrete Gray**: `#E8E8E6` - Primary neutral
- **Warm Beige**: `#F5F1EB` - Surface color
- **Off-White**: `#FAF9F6` - Background
- **Deep Charcoal**: `#2C2C2A` - Primary text/accents
- **Muted Olive**: `#7A8471` - Accent color
- **Brushed Bronze**: `#9B8B6F` - Secondary accent

### Typography
- **Headings**: Playfair Display (serif) - Elegant, architectural
- **Body**: Inter (sans-serif) - Clean, highly readable
- **Line Height**: 1.7 for body, 1.2 for headings
- **Spacing**: Generous line heights and spacing throughout

### Animations
- Smooth transitions with cubic-bezier easing
- Slow fade-in animations (0.8s)
- Gentle hover effects with 0.4-0.7s duration
- Parallax scrolling on hero section
- Intersection Observer for scroll-triggered animations

## ✨ Features

### Navigation
- Fixed top navigation that transitions from transparent to solid on scroll
- Smooth scroll to sections
- Mobile-responsive hamburger menu
- Minimal wordmark logo

### Hero Section
- Full-screen hero with architectural imagery
- Parallax scrolling effect
- Elegant typography overlay
- Scroll indicator with bounce animation

### Projects Section
- Grid-based layout (responsive: 1/2/3 columns)
- Large editorial-style thumbnails
- Grayscale to color transition on hover
- Project details revealed on hover
- Smooth, slow transitions (700ms)

### About & Studio Sections
- Two-column layouts
- Philosophy-driven content
- Pull quotes with elegant typography
- Image grids with hover effects

### Services Section
- Clean, text-focused layout
- No icons (as per requirements)
- Structured and intentional presentation

### Journal Section
- Editorial-style magazine layout
- Large typography and strong imagery
- Hover lift effects
- Category and date labels

### Contact Section
- Elegant contact form
- Neutral background with soft contrast
- Fields: Name, Email, Project Type, Message
- Minimal button styling
- Studio address and social links

### Footer
- Minimal, clean design
- Brand name, navigation links, social links
- Subtle copyright text

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## 🎯 Key Technologies

- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS processing

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance Features

- Smooth scroll behavior
- Intersection Observer for efficient animations
- Optimized images (using Unsplash CDN)
- Lazy loading animations
- Minimal JavaScript bundle

## 🎨 Customization

### Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --color-concrete-gray: #E8E8E6;
  --color-warm-beige: #F5F1EB;
  /* ... */
}
```

### Content
Update project data in `components/Projects.jsx`, services in `components/Services.jsx`, etc.

### Images
Replace Unsplash URLs with your own images in the respective components.

## 📝 Notes

- The `@theme` warning in globals.css is expected with Tailwind CSS 4 and can be ignored
- All images currently use Unsplash CDN - replace with your own assets
- Form submission in Contact component is a placeholder - implement backend integration as needed

## 🔄 Future Enhancements

- Add CMS integration for easy content management
- Implement image optimization with Next.js Image component
- Add blog functionality for Journal section
- Integrate contact form with email service
- Add project detail pages with lightbox gallery

---

Built with precision and attention to detail, following architectural design principles.
