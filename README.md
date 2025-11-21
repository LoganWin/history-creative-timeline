# Response to 9/11 – Interactive Timeline

An interactive, multi-page React app that traces how the U.S. responded to the 9/11 attacks between 2001–2004, highlighting connections among military action, immigration enforcement, and cultural memory. Built for WPI HI 1313: The U.S. and the World.

## Purpose
- School history project that provides a concise teaching aid that ties policy decisions to lived experience in the immediate post-9/11 era.
- Make it easy for first-time viewers to explore events chronologically, then pivot to thematic analysis and source material.

## Overview
- Hero landing page with CTA into timeline.
- Alternating timeline cards with flip-to-reveal context, year markers, and entrance animation as you scroll.
- Top-level navigation to a deeper analysis page (imperialism, immigration, culture) and a references page with course metadata and works cited.
- Fully client-side: content is supplied via typed data files; no external APIs.

## Technologies Used
- Framework: React 19 with TypeScript, Vite 7 (React SWC plugin), React Router 7.
- Styling: Tailwind CSS with DaisyUI and FlyonUI plugins.
- Tooling: TypeScript project refs (`tsconfig.app.json`, `tsconfig.node.json`), PostCSS/Autoprefixer, Vite dev server and build pipeline.

## Methods / Approach
- **Data-first content**: Timeline, detail, and reference content live in `src/data/*.ts`. Pages map over typed arrays so edits require no component changes.
- **Component reuse**: `TimelineCard` receives event data plus flip state/handlers; `Layout` centralizes the gradient shell and navbar.
- **State & interaction**: `Timeline` tracks which card is flipped and uses `IntersectionObserver` to fade/slide cards in when they enter the viewport.
- **Routing & UX**: `routing.tsx` wires pages under a shared layout; `MoreDetails` uses in-page anchor scrolling for fast section jumps; `Layout` auto-scrolls to top on route change.
- **Styling system**: Tailwind classes drive layout/typography; DaisyUI/FlyonUI plugins extend the utility set for consistent spacing, borders, and gradients.

## Getting Started
Prerequisites: Node 18+ is recommended for Vite 7.

### Install dependencies
Using Yarn (project’s declared package manager):
```bash
yarn install
```
Or with npm:
```bash
npm install
```

### Run the dev server
```bash
yarn dev
# or: npm run dev
```
Visit the printed local URL (default `http://localhost:5173`).

### Build for production
```bash
yarn build
```
Outputs static assets to `dist/`.

### Preview the production build
```bash
yarn preview
```

## Usage
- From the landing page, click **View Timeline** to browse events chronologically; use **Learn More** to flip each card for details.
- Use the navbar to jump to **More Details** (section buttons scroll within the page) or **References** for course notes and sources.

## Content & Input/Output
- No runtime API calls; all content is static TypeScript data.
- User input is limited to navigation, card toggles, and scrolling; there are no forms or stored submissions.

