# Drizzle + Neon (pg) setup

This project was updated to include Drizzle ORM configured for the `pg` (node-postgres) driver.

Files added/updated:

- `drizzle.config.js` - Drizzle Kit configuration.
- `.env` - Template for `DATABASE_URL` (fill in your Neon connection string).
- `src/schema.js` - Drizzle schema defining `demo_users`.
- `src/db.js` - Database client using `pg` + Drizzle.
- `src/index.js` - Demo script showing a full CRUD lifecycle.
- `package.json` - switched to ESM and migration scripts added.

Quick steps:

1. Install dependencies (already run by the setup script or run manually):

```bash
npm install drizzle-orm pg dotenv
npm install -D drizzle-kit
```

2. Add your Neon connection string to `.env` as `DATABASE_URL`.

3. Generate the initial migration:

```bash
npm run db:generate
```

4. Apply migrations:

```bash
npm run db:migrate
```

5. Run the demo CRUD script:

```bash
npm run demo
```

Notes:
- Do NOT commit real credentials to version control.
- If you prefer using Neon WebSocket or Serverless drivers, I can switch the `src/db.js` accordingly.
