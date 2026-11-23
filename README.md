# Cozy Beachfront Villa — Link Tree

A Next.js static link-tree landing page configured for GitHub Pages hosting.

## Local Development

```bash
npm install
npm run dev
```

## Static Build

```bash
npm run build
```

This generates the static site in the `out/` directory.

## Deploying to GitHub Pages

1. Push this repository to GitHub (default branch `main`).
2. In your GitHub repository, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build the static export (handling `basePath` for project pages or custom domains) and publish the `out/` directory to GitHub Pages.
