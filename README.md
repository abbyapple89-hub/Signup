# Signup

Vite + React + TypeScript project for event signup, now backed by Supabase.

## 1. Install dependencies

```bash
npm install
```

## 2. Create Supabase project

1. Go to Supabase dashboard and create a new project.
2. Open `SQL Editor`.
3. Run SQL from `supabase/migrations/202603050001_create_registrations.sql`.

## 3. Configure env vars

Copy `.env.example` to `.env` and fill values:

```bash
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

## 4. Run locally

```bash
npm run dev
```

## 5. Deploy frontend

Deploy `dist` to Vercel/Netlify after build:

```bash
npm run build
```

Make sure the same `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are configured in your deployment platform.
