# AGENTS.md

Singapore weather tracker: save locations, store weather snapshots, refresh on demand.

## Commands

```bash
npm test         # Run all tests once (vitest run)
npm run build    # Build frontend (Vite) + compile backend TypeScript
npx eslint .     # Lint
npx prettier --write .  # Format
```

## Critical: data flow

The app uses a **snapshot pattern** — it never calls the external weather API on page load.

1. `POST /api/locations` — saves coordinates, immediately fetches + stores a snapshot
2. `GET /api/locations` — reads from SQLite only, no external call
3. `POST /api/locations/:id/refresh` — fetches a fresh snapshot, overwrites the stored one

Any feature that needs current weather must go through the refresh flow, not a direct API call from the frontend.

## Further reading

- [Architecture](docs/architecture.md) — process model, request routing, component map
- [API reference](docs/api.md) — backend endpoints + external data.gov.sg endpoints
- [Testing](docs/testing.md) — Vitest/Supertest patterns, mock weatherClient
- [Database](docs/database.md) — Drizzle ORM, migrations, schema
- [Environment variables](docs/environment.md) — all env vars with defaults
- [Project structure](docs/project-structure.md) — annotated file tree
