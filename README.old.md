# Foundations Of Wealth — Landing

Minimal React + Vite landing page scaffold with Firebase init.

Quick start:

```bash
cd ~/hello-github
npm install
# create a .env file with VITE_FIREBASE_* values (see below)
npm run dev
```

Required env variables (example `.env`):

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Files of interest:
- [index.html](index.html)
- [src/main.jsx](src/main.jsx)
- [src/components/Landing.jsx](src/components/Landing.jsx)
- [src/firebase.js](src/firebase.js)

Next steps:
- Replace `public/cover.svg` with your book cover image (keep the path `/cover.svg` or update `Landing.jsx`).
- Wire the purchase flow (Stripe/Firebase function) and analytics as needed.

GitHub: https://github.com/Mrwiggles136
