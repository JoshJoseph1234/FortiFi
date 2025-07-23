
# FortiFi Frontend

>This is the frontend for the FortiFi project, built with [Next.js](https://nextjs.org) and TypeScript. It provides the user interface and client-side logic for interacting with the FortiFi platform.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Tech Stack](#tech-stack)
- [Developer Notes & Integration Points](#developer-notes--integration-points)
- [Learn More](#learn-more)

---

## Project Overview
This frontend implements the main user-facing features of FortiFi, including registration, cognitive assessment, and result display. It is designed to be modular and ready for integration with backend APIs, ML services, and dashboard/devops workflows.

## Folder Structure

```
frontend/
├── public/           # Static assets (SVGs, favicon, etc.)
├── src/
│   ├── pages/        # Next.js pages (routing)
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── cognitive.tsx
│   │   ├── register.tsx
│   │   ├── result.tsx
│   │   └── api/
│   │       └── hello.ts
│   ├── styles/       # Global styles (CSS)
│   └── utils/        # Utility functions (e.g., fingerprinting)
├── package.json      # Project dependencies and scripts
├── tsconfig.json     # TypeScript configuration
└── ...
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Available Scripts

- `dev` - Runs the app in development mode
- `build` - Builds the app for production
- `start` - Starts the production server
- `lint` - Runs ESLint for code quality

## Tech Stack
- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) for linting
- [PostCSS](https://postcss.org/) for CSS processing
- [Geist Font](https://vercel.com/font) via `next/font`

---

## Developer Notes & Integration Points

### For Backend Developers
- **API Integration:**
  - The frontend expects RESTful endpoints for user registration, cognitive test submission, and result retrieval.
  - Example API route: `/api/hello` (see `src/pages/api/hello.ts`).
  - Update or add new API routes in `src/pages/api/` as needed.
- **Environment Variables:**
  - Use `.env.local` for API URLs and secrets. Document any required variables.
- **Authentication:**
  - If authentication is required, coordinate on token/session management.

### For ML Engineers
- **Cognitive Test Integration:**
  - The `cognitive.tsx` page is designed to collect user input for cognitive assessment.
  - Integrate ML model endpoints for scoring or analysis. The frontend can POST data and display results from your API.
- **Result Display:**
  - The `result.tsx` page is ready to display ML outputs. Define the expected response format for seamless integration.

### For Dashboard/DevOps
- **Deployment:**
  - The app is ready for deployment on Vercel or any Node.js-compatible platform.
  - See [Next.js deployment docs](https://nextjs.org/docs/pages/building-your-application/deploying).
- **Monitoring & Logging:**
  - Integrate with your preferred monitoring/logging tools as needed.
- **Static Assets:**
  - Place any branding or dashboard assets in the `public/` folder.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - interactive tutorial.
- [Next.js GitHub](https://github.com/vercel/next.js) - feedback and contributions.

---

## License
This project is licensed for internal use within the FortiFi team. Please contact the project owner for external use or contributions.
