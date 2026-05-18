# Project Structure

```
weather-starter/
├── backend/
│   ├── drizzle/                   # Generated Drizzle SQL migration files
│   ├── logs/app.log               # Structured JSON log output (Pino)
│   ├── weather.db                 # SQLite database (gitignored)
│   └── src/
│       ├── server.ts              # Express app factory; wires Vite middleware + routes
│       ├── db.ts                  # SQLite connection, Drizzle setup, all data access helpers
│       ├── schema.ts              # Drizzle table definitions + WeatherSnapshot interface
│       ├── weather.ts             # SingaporeWeatherClient — aggregates data.gov.sg endpoints
│       ├── logger.ts              # Pino logger (stdout + file; silent in tests)
│       └── routes/
│           ├── locations.ts       # All location endpoints + WeatherClient interface
│           └── locations.test.ts  # Supertest integration tests
├── frontend/
│   └── src/
│       ├── main.tsx               # React entry point
│       ├── App.tsx                # Root: ThemeProvider → StoreProvider → Layout
│       ├── api.ts                 # Typed fetch wrappers for all backend endpoints
│       ├── types.ts               # Shared types: Location, WeatherSnapshot, StoreValue
│       ├── theme.tsx              # Theme context and provider
│       ├── state/store.tsx        # React context store — all async state and actions
│       └── components/
│           ├── Layout.tsx         # Top-level layout shell
│           ├── Sidebar.tsx        # Location list panel
│           ├── SidebarCard.tsx    # Per-location card with refresh + delete
│           ├── AddLocationForm.tsx # Lat/lon input form
│           ├── Hero.tsx           # Main panel for the selected location
│           ├── HourlyStrip.tsx    # Scrollable hourly forecast row
│           ├── TenDayForecast.tsx # Multi-day forecast list
│           ├── MapCard.tsx        # Leaflet map with location pins
│           ├── Tiles.tsx          # Detail tiles: temp, humidity, rainfall, wind, UV, AQI
│           ├── icons.tsx          # SVG weather condition icons
│           ├── format.ts          # Display formatting helpers (units, labels)
│           └── ThemeSelector.tsx  # Theme toggle UI
├── scripts/
│   ├── dev.mjs                    # Starts Express + Portless in dev mode
│   ├── start.mjs                  # Starts compiled production server
│   ├── doctor.mjs                 # Smoke-tests /health and /api/locations
│   └── reset.mjs                  # Deletes backend/weather.db
├── docs/                          # Agent and developer reference (this folder)
├── drizzle.config.ts              # Drizzle Kit config
├── vitest.config.ts               # Vitest config (node env, backend only, serial)
└── package.json                   # Root workspace scripts + shared dependencies
```
