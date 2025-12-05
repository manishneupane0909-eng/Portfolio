# Cloudflare Pages Build Settings

## Current Issue
Cloudflare is trying to run `react-static build` which doesn't exist. 

## Fix Required
Update Cloudflare Pages build settings:

1. Go to Cloudflare Dashboard → Pages → Your Project → Settings → Builds & deployments

2. Update these settings:
   - **Framework preset**: `Vite` (or `None` if Vite isn't available)
   - **Build command**: `npm run build`
   - **Build output directory**: `build`
   - **Root directory**: `/` (leave empty or use `/`)
   - **Node version**: `18` or higher

3. Save and trigger a new deployment

## What Should Happen
After updating, Cloudflare will:
- Run `npm install` (installs dependencies)
- Run `npm run build` (runs `tsc && vite build`)
- Output goes to `build/` folder
- Deploy the `build/` folder

## Current package.json Build Script
```
"build": "tsc && vite build"
```

This compiles TypeScript and builds with Vite, outputting to the `build/` directory.

