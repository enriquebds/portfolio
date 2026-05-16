# Enrique Barbosa — Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat&logo=framer)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite)](https://vite.dev)

Personal portfolio website built with a "Terminal meets Editorial" aesthetic — featuring dark/light mode, animated code snippets, a memory game, and smooth scroll-driven animations.

---

## Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 + TypeScript 6 |
| Styling | Tailwind CSS 3 + CSS Variables |
| Animations | Framer Motion 12 |
| Icons | React Icons (Si family) |
| Build Tool | Vite 8 |
| Class Utilities | clsx + tailwind-merge |

---

## Features

- **"Terminal meets Editorial"** aesthetic with grain overlay and grid background
- **Auto dark/light mode** based on `prefers-color-scheme` + manual toggle + localStorage persistence
- **Custom cursor** with spring lag effect (hidden on mobile)
- **Scroll progress bar** at the top
- **Typewriter effect** cycling through roles
- **Animated code snippets** with fake syntax highlighting and floating animation
- **Memory Game** — 10 tech pairs, Fisher-Yates shuffle, 3D flip cards, best score tracking
- **Scroll spy navigation** — highlights active section in header
- **Fully accessible** — semantic HTML, ARIA labels, skip link, keyboard navigation
- **Responsive** — works great on mobile, tablet, and desktop

---

## Local Setup

```bash
# Clone the repo
git clone https://github.com/enriquebds/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Folder Structure

```
src/
├── components/
│   ├── cursor/
│   │   └── CustomCursor.tsx      # Spring-animated dot cursor
│   ├── layout/
│   │   ├── Header.tsx            # Sticky header with scroll spy + mobile drawer
│   │   └── Footer.tsx            # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx              # Full-viewport hero with typewriter
│   │   ├── About.tsx             # Bio, stats, code snippet
│   │   ├── Experience.tsx        # Vertical timeline
│   │   ├── Projects.tsx          # Project cards (coming soon)
│   │   ├── Skills.tsx            # Tech badges grouped by category
│   │   ├── Certifications.tsx    # Certs + academic formation
│   │   └── Contact.tsx           # Contact form + social links
│   └── ui/
│       ├── CodeSnippet.tsx       # Terminal-style code window
│       ├── MemoryGame.tsx        # 4×5 memory game grid
│       ├── ScrollProgress.tsx    # Top progress bar
│       ├── SectionTitle.tsx      # Animated section header
│       ├── TechBadge.tsx         # Skill badge with tooltip
│       └── ThemeToggle.tsx       # Sun/moon toggle button
├── data/
│   ├── certifications.ts         # Cert + academic data
│   ├── experience.ts             # Work experience data
│   ├── projects.ts               # Project data
│   └── skills.ts                 # Skills organized by category
├── hooks/
│   ├── useInView.ts              # IntersectionObserver wrapper
│   ├── useMemoryGame.ts          # Full memory game logic
│   ├── useScrollSpy.ts           # Active section tracker
│   ├── useTheme.ts               # Dark/light mode management
│   └── useTypewriter.ts          # Cycling typewriter effect
├── styles/
│   └── globals.css               # Tailwind + CSS variables + grain
├── types/
│   └── index.ts                  # TypeScript interfaces
├── utils/
│   ├── cn.ts                     # clsx + tailwind-merge helper
│   └── constants.ts              # Framer Motion variants + nav links
├── App.tsx
└── main.tsx
```

---

## Adding Real Projects

Edit `/src/data/projects.ts` — set `isComingSoon: false` and add real `githubUrl` / `demoUrl`:

```ts
{
  id: 'my-project',
  title: 'My Project',
  description: 'A description of the project.',
  stack: ['React', 'TypeScript'],
  githubUrl: 'https://github.com/you/repo',
  demoUrl: 'https://your-project.vercel.app',
  isComingSoon: false,
  featured: true,
}
```

Then update `Projects.tsx` to render the GitHub/Demo buttons when `!project.isComingSoon`.

---

## Design Tokens

| Token | Light | Dark |
|---|---|---|
| Background | `#F8F7F4` | `#0F111A` |
| Text | `#1A1A1A` | `#E8E8E8` |
| Accent (green) | `#00C896` | `#00C896` |
| Amber | `#F5A623` | `#F5A623` |
| Card surface | `#FFFFFF` | `#1A1D2E` |

Fonts: **Syne** (display) · **JetBrains Mono** (code) · **DM Sans** (body)
