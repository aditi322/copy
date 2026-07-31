# Jewellery Frontend

Premium multi-page jewellery e-commerce frontend built with React and Vite. This project is frontend-only and uses mock data plus API stubs for backend handoff.

## Tech Stack

- React (Vite)
- Tailwind CSS
- React Router
- React Context API (cart and wishlist)
- Framer Motion
- React Helmet Async

## Features

- Multi-page flow: Home, Collections, Product Detail, Cart, Address, Payment, Confirmation, Wishlist
- Ecommerce UI blocks: product cards, filter sidebar, cart drawer, order summary, checkout forms
- SEO-ready pages with unique title and meta description per route
- Mock API layer in src/utils/api.js for clean FastAPI integration later
- Responsive layout tuned for mobile-first behavior

## Quick Start

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open the local URL shown in terminal (usually http://localhost:5173).

## Build For Production

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Scripts

- npm run dev: Start local development server
- npm run build: Create production build in dist
- npm run preview: Preview production build
- npm run lint: Run oxlint

## Project Structure

src/
- components/: reusable UI components
- pages/: route-level pages
- data/: mock product and homepage data
- context/: global state providers
- hooks/: custom hooks
- utils/: helpers and API stubs

## Backend Handoff

API expectations are documented in API_CONTRACT.md.

All data fetches and submissions are routed through named functions in src/utils/api.js so backend integration can be done without refactoring UI pages.
