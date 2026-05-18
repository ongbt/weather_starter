# API Reference

## Backend endpoints

| Method   | Endpoint                     | Description                              |
| -------- | ---------------------------- | ---------------------------------------- |
| `GET`    | `/health`                    | Health check → `{ status: "healthy" }`   |
| `GET`    | `/api/locations`             | List all locations with weather snapshot |
| `POST`   | `/api/locations`             | Create location + auto-refresh weather   |
| `GET`    | `/api/locations/:id`         | Get a single location                    |
| `DELETE` | `/api/locations/:id`         | Delete a location → 204                  |
| `POST`   | `/api/locations/:id/refresh` | Refresh weather snapshot from API        |
| `POST`   | `/api/logs`                  | Log a frontend interaction event         |

`POST /api/locations` body: `{ "latitude": number, "longitude": number }`

Coordinates must be within Singapore: lat 1.1–1.5, lon 103.6–104.1. Returns 422 otherwise. Returns 409 on duplicate coordinates.

`POST /api/locations/:id/refresh` returns 502 if the external weather API fails.

## External API — data.gov.sg

Base URL: `https://api-open.data.gov.sg` (v2 endpoints)  
Legacy base URL: `https://api.data.gov.sg` (v1 endpoints)

No API key required for basic usage. Set `WEATHER_API_KEY` env var to pass `x-api-key` header if needed.

| Endpoint                                        | Used for                                         |
| ----------------------------------------------- | ------------------------------------------------ |
| `GET /v2/real-time/api/two-hr-forecast`         | Area condition text + valid period               |
| `GET /v2/real-time/api/air-temperature`         | Temperature °C (nearest station)                 |
| `GET /v2/real-time/api/relative-humidity`       | Humidity % (nearest station)                     |
| `GET /v2/real-time/api/rainfall`                | Rainfall mm (nearest station)                    |
| `GET /v2/real-time/api/wind-speed`              | Wind speed knots (nearest station)               |
| `GET /v2/real-time/api/wind-direction`          | Wind direction degrees (nearest station)         |
| `GET /v2/real-time/api/uv`                      | UV index                                         |
| `GET /v2/real-time/api/psi`                     | PSI 24-hourly by region                          |
| `GET /v2/real-time/api/pm25`                    | PM2.5 1-hourly by region                         |
| `GET /v2/real-time/api/twenty-four-hr-forecast` | 24-hour forecast periods + temp range            |
| `GET /v1/environment/4-day-weather-forecast`    | 4-day daily outlook (legacy v1, different shape) |

The v1 4-day endpoint has a different response shape from the v2 endpoints — `items[].forecasts[]` instead of `data.records[]`.
