# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview
This is Carlos Ortet's professional academic portfolio website built with Next.js, TypeScript, and Tailwind CSS. The portfolio showcases his academic background, research, publications, executive experience, and global leadership roles.

## Development Commands

### Install dependencies
```bash
npm install
# or
bun install
```

### Run development server
```bash
npm run dev
# or
bun dev
```

### Build for production
```bash
npm run build
# or
bun build
```

### Run production build locally
```bash
npm run start
# or
bun start
```

### Linting
```bash
npm run lint
# or
bun lint
```

### Type checking
```bash
npm run typecheck
# or
bun typecheck
```

## Architecture

### Key Files
- **`/src/data/resume.tsx`** - Central data configuration containing all portfolio content
- **`/src/app/page.tsx`** - Main homepage with all portfolio sections
- **`/src/app/layout.tsx`** - Root layout with metadata and theme provider
- **`/src/components/`** - Reusable UI components

### Portfolio Sections
1. **Hero** - Name, title, and professional description
2. **About** - Detailed professional summary
3. **Experience** - Executive and entrepreneurial positions
4. **Education** - Academic credentials
5. **Research Projects** - Academic and innovation projects
6. **Publications** - Academic papers and thought leadership
7. **Leadership** - Global leadership roles and initiatives
8. **Contact** - Professional contact information

### Important Customizations
- Skills section has been removed (not relevant for academic portfolio)
- Hackathons section converted to Publications
- Added Leadership section for global initiatives
- Navigation updated to reflect academic focus
- Professional tone throughout (no emojis or casual language)

## Content Management
All content is managed through `/src/data/resume.tsx`. This includes:
- Personal information
- Work experience
- Education
- Research projects
- Publications
- Leadership roles
- Social links

## Deployment
The site is designed to be deployed on Vercel or similar platforms supporting Next.js applications.