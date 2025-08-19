# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Development
```bash
npm run dev     # Start Next.js dev server on localhost:3000
```

### Building & Production
```bash
npm run build   # Build production-ready application
npm run start   # Start production server
```

### Code Quality
```bash
npm run lint    # Run ESLint on data/ and src/ directories
```

### Testing
```bash
npm run test     # Run Jest tests in watch mode
npm run test:ci  # Run Jest tests in CI mode (no watch)
```

## Architecture Overview

This is a Next.js 15 application showcasing the Starknet ecosystem, built with TypeScript and React 18.

### Core Stack
- **Framework**: Next.js 15 with React 18
- **UI Library**: Chakra UI v2
- **Styling**: Emotion (CSS-in-JS)
- **Language**: TypeScript with strict mode
- **Internationalization**: Built-in Next.js i18n supporting 9 languages
- **Analytics**: Vercel Analytics & Speed Insights

### Project Structure

#### `/src` - Main application code
- `/pages` - Next.js page components with file-based routing
  - `index.tsx` - Homepage listing projects
  - `/projects/[id].tsx` - Dynamic project detail pages
  - `/jobs` - Job board functionality
  - `/academy` - Educational resources
  - `/metrics` - Ecosystem metrics dashboard
- `/components` - Reusable React components organized by feature
  - `/layout` - Core layout components (Header, Footer, Layout wrapper)
  - `/card` - Various card components for projects and resources
  - `/job` - Job-related components
  - `/project` - Project detail components
  - `/academy` - Academy section components
  - `/metrics` - Metrics visualization components
- `/services` - API service layers
  - `ecosystem-api.service.ts` - Fetches project data from starknet-db.com API
  - `metrics-api.service.ts` - Metrics data fetching
  - `job.service.ts` - Job listing functionality
  - `project.service.ts` - Project-related business logic
- `/context` - React contexts (TranslateProvider for i18n)
- `/models` - TypeScript interfaces and types
- `/styles` - Theme configuration and global styles

#### `/data` - Static data files
- `ecosystem.ts` - Project definitions and metadata
- `job.ts` - Job listings
- `tag.ts` - Project tags/categories
- `academy.ts` - Educational resources

#### `/public` - Static assets
- `/logos` - Project logos
- `/tech-logos` - Technology logos
- Favicon and PWA assets

### Key Architectural Patterns

1. **Data Fetching**: Hybrid approach using both static data (`/data` directory) and API calls to starknet-db.com
2. **Internationalization**: Server-side locale detection with client-side language switching
3. **Component Organization**: Feature-based organization with clear separation of concerns
4. **State Management**: React hooks and SWR for data fetching
5. **Styling**: Chakra UI theme customization in `/src/styles/customTheme`

### External APIs
- **starknet-db.com**: Primary data source for project information, contributions, and metrics
- API base URL: `https://api.starknet-db.com`

### Contributing
The project accepts community contributions for:
- Adding/updating projects (see `/docs/add-project.md`)
- Adding/updating job listings (see `/docs/add-job.md`)
- Improving translations (see `/docs/translations.md`)