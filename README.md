# MITRA BUMI ORGANIK

A modern corporate and product landing page for a premium organic commodities brand. Built with Next.js, TypeScript, and Tailwind CSS, this project focuses on storytelling, product presentation, and conversion-oriented CTAs for product inquiries and contact requests.

## Overview

This project includes:

- A responsive landing page with hero sections and product highlights
- Catalogue and product detail views
- About Us and Contact Us sections
- Animated UI elements powered by AOS
- Google Analytics integration using Next.js third-party GA support
- Clean marketing-oriented design for B2B and global supply distribution

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- AOS
- Heroicons
- Google Analytics via @next/third-parties

## Project Structure

```bash
app/
  about-us/
  catalogue/
  contact-us/
  components/
  globals.css
  layout.tsx
  page.tsx
public/
  animations/
  images/
package.json
next.config.ts
tsconfig.json
.eslintrc.json (or config managed through eslint.config.mjs)
```

## Prerequisites

Before you begin, make sure you have installed:

- Node.js 20+
- npm or your preferred package manager

## Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd commodity-landing-page
```

2. Install dependencies:

```bash
npm install
```

3. Create a local environment file:

```bash
cp .env.example .env.local
```

If `.env.example` does not exist, create a `.env.local` file manually with:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your Google Analytics measurement ID.

## Running the Project

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Production Build

To build the app for production:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

## Linting

```bash
npm run lint
```

## Deployment

This project is ready to deploy on platforms such as:

- Vercel
- Netlify
- Any Node.js-compatible hosting platform

For Vercel, the project can be deployed directly from the repository with the same environment variable configuration.

## Environment Variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_GA_ID` | Yes | Google Analytics measurement ID used for page and event tracking |

## Notes

- The app uses the App Router structure from Next.js.
- Font optimization is handled by Next.js built-in font loader.
- Analytics events are configured in UI interaction components such as navbar and contact buttons.

## License

This project is currently unlicensed unless you add a specific license file for public or commercial use.

## Contact

For business inquiries, product requests, or collaboration opportunities, use the contact section of the website or contact the project owner directly.
