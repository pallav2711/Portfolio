# Deploy Pallav Kanani Portfolio

## Quick deploy checklist

1. Copy `server/.env.example` → `server/.env` and set `ADMIN_PASSWORD` (and `MONGODB_URI` if using MongoDB).
2. Run from project root:

```bash
npm run install-all
npm run build
npm start
```

3. Open `http://localhost:5000` — API + website served together.

Icons and social preview images are generated from `client/public/assets/profile.jpg` during `npm run build`.

---

## Option A: Render / Railway (full-stack — recommended)

**Build command**

```bash
npm run install-all && npm run build
```

**Start command**

```bash
npm start
```

**Environment variables**

| Variable | Required | Description |
|----------|----------|-------------|
| `PORT` | Auto | Set by host |
| `MONGODB_URI` | Optional | MongoDB connection string |
| `ADMIN_PASSWORD` | Yes | Password for `/admin` |
| `NODE_ENV` | Optional | `production` |

---

## Option B: Vercel (frontend only)

1. Set **Root Directory** to `client`.
2. **Build command:** `npm run build` (add `generate-icons` in client scripts or run from monorepo root).
3. **Output directory:** `dist`
4. Add rewrites for SPA + proxy `/api` to your backend URL.

For contact form on Vercel-only deploy, you still need the Express API hosted elsewhere.

---

## Option C: Netlify (frontend only)

- Base directory: `client`
- Build: `npm run build`
- Publish: `dist`
- Add `_redirects`: `/* /index.html 200`

---

## Files that must exist before deploy

| Path | Purpose |
|------|---------|
| `client/public/assets/profile.jpg` | Hero photo + favicon source |
| `client/public/favicon.ico` | Browser tab icon (auto-generated) |
| `client/dist/` | Production build (after `npm run build`) |

---

## Regenerate favicons only

```bash
npm run generate-icons
```
