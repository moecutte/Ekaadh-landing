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

1. Push this repo to GitHub (`moecutte/Ekaadh-landing`).
2. Railway project → Deploy from that repo. Leave **Root Directory** empty.
3. Railway builds the `Dockerfile` and serves `public/` on `$PORT`.
4. Service → **Settings** → **Networking** → **Generate domain**.

No database or env vars required.

Google Play URLs (after deploy):

- Privacy policy: `https://ekaadh.com/privacy`
- Terms: `https://ekaadh.com/terms`
- Account deletion: `https://ekaadh.com/account-deletion`

