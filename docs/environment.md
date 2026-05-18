# Environment Variables

Copy `.env.example` to `.env` in the workspace root. For frontend-specific vars, copy `frontend/.env.local.example` to `frontend/.env.local`.

| Variable          | Default                      | Description                                           |
| ----------------- | ---------------------------- | ----------------------------------------------------- |
| `WEATHER_API_KEY` | _(none)_                     | Optional API key for data.gov.sg (`x-api-key` header) |
| `DATABASE_PATH`   | `backend/weather.db`         | Path to the SQLite database file                      |
| `PORT`            | `3000`                       | Internal Express port (Portless proxies this)         |
| `LOG_LEVEL`       | `info` (or `silent` in test) | Pino log level                                        |
| `LOG_FILE_PATH`   | `backend/logs/app.log`       | Log file destination                                  |
| `PORTLESS_HTTPS`  | _(unset)_                    | Set to `1` to enable HTTPS via Portless               |
