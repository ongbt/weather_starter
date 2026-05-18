# Architecture

## Process model

Backend and frontend run as **one Node process** in development. Express serves `/api/*`; Vite middleware serves the React SPA. The frontend uses relative `/api` paths — there is no CORS configuration.

```
Browser (weather-starter.localhost:1355)
    └── Portless proxy
            └── Express server (random local port)
                    ├── /api/*      → Express route handlers
                    ├── /health     → Health check
                    ├── /api/logs   → Frontend interaction logging
                    └── /*          → Vite middleware (dev) or static dist/ (prod)
                                        └── SQLite via Drizzle ORM
                                        └── data.gov.sg API (on refresh only)
```

In production, `frontend/dist/` is served as static files. The same Express process handles both.

## Frontend component map

```
App
└── ThemeProvider
    └── StoreProvider          ← all async state lives here (store.tsx)
        └── Layout
            ├── Sidebar
            │   ├── SidebarCard(s)
            │   └── AddLocationForm
            ├── Hero            ← main panel for selected location
            │   ├── Tiles       ← temp, humidity, rainfall, wind, UV, air quality
            │   ├── HourlyStrip
            │   ├── TenDayForecast
            │   └── MapCard     ← Leaflet map with location pins
            └── ThemeSelector
```

## State management

`store.tsx` is a single React context. It owns all async state (`locations`, `selectedId`, `isLoading`, `refreshingId`, `error`) and exposes `create`, `refresh`, `remove`, and `select` actions. All user interactions are also fire-and-forget logged to `POST /api/logs` via `logInteraction`.

## Weather aggregation

`SingaporeWeatherClient.getCurrentWeather()` fans out to ~10 data.gov.sg endpoints in parallel via `Promise.all`. Each individual endpoint failure is caught and contributes `null` fields — it never fails the whole snapshot. See [api.md](api.md) for the full endpoint list.

Nearest-station and nearest-region matching uses squared Euclidean distance (no haversine — distances are small enough that this is fine).
