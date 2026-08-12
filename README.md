# Ekaadh landing (Railway)

Standalone marketing page. Not part of `Ekaadh-backend` or `Ekaadh-mobile`.

## Local

```bash
cd Ekaadh-landing
npm install
npm run dev
```

Or open `public/index.html` in a browser.

Edit `APP_URL` in `public/app.js` if the live app is not `https://ekaadh.com`.

## Railway

1. Push this folder as its **own GitHub repo** (or set Railway **Root Directory** to `Ekaadh-landing` if it lives in a monorepo).
2. New Railway project → Deploy from that repo.
3. Railway runs Nixpacks, then `serve` on `$PORT`.
4. Optional: attach custom domain (`ekaadh.com`) in Railway → Settings → Networking.

No database or env vars required.
