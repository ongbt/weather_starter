# Database

## Stack

- **SQLite** via Node's built-in `node:sqlite` (no native bindings, no install step)
- **Drizzle ORM** with the sqlite-proxy adapter
- Database file: `backend/weather.db` (override with `DATABASE_PATH` env var)

## Migrations

Migrations run **automatically on server startup** — you don't need to run them manually in development. Generated files live in `backend/drizzle/`.

```bash
npm run db:generate   # generate migration files after editing schema.ts
npm run db:migrate    # apply migrations manually (rarely needed)
npm run reset         # delete backend/weather.db entirely
```

When you change `backend/src/schema.ts`, always run `db:generate` and commit the generated migration file alongside the schema change.

## Schema

One table: `locations`. Each row stores coordinates, a `created_at` timestamp, and a full weather snapshot as flat columns. The two JSON columns (`forecast_periods`, `daily_forecast`) are stored as JSON text and typed via Drizzle's `.$type<>()`.

Coordinates have a unique index — duplicate lat/lon pairs are rejected at the DB layer and surface as a `DuplicateLocationError` in `db.ts`.

## Data access

All DB access goes through the helper functions in `backend/src/db.ts`:

| Function         | Description                              |
| ---------------- | ---------------------------------------- |
| `listLocations`  | All rows, ordered by `created_at` desc   |
| `createLocation` | Insert + duplicate check                 |
| `getLocation`    | Single row by id                         |
| `updateWeather`  | Overwrite weather columns for a location |
| `deleteLocation` | Delete by id, returns false if not found |
| `resetStore`     | Delete all rows + reset autoincrement    |

Do not use Drizzle directly in route handlers — go through these functions.
