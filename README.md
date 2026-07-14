# Bunso Catering

A responsive, luxury catering website built with React, Vite and Tailwind CSS. It includes a hero slider, service packages, gallery lightbox, booking enquiry form, testimonials, contact details, and a floating Messenger shortcut.

## Get started

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Deploy to GitHub Pages

1. Update `base` in `vite.config.js` to match your GitHub repository name (`/repository-name/`).
2. In GitHub repository settings, set Pages to deploy from the `gh-pages` branch.
3. Run:

```bash
npm run deploy
```

## Deploy to Vercel

1. Push this project to a GitHub repository, then import that repository at [Vercel](https://vercel.com/new).
2. Vercel reads `vercel.json` and will use `npm run build` and the `dist` output folder automatically.
3. If the source files are inside a nested `bunso-catering` folder, set **Root Directory** to `bunso-catering` before deploying. Otherwise, leave it blank.

## Customisation

- Replace the Unsplash image URLs in `src/main.jsx` with Bunso's own imagery.
- Update contact details, social profile links and the `https://m.me/` Messenger target.
- Connect the booking form submit handler to your preferred form service or backend.
