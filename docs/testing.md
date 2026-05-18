# Testing

## Running tests

```bash
npm test    # single run (always use this, not --watch)
```

Tests live in `backend/src/**/*.test.ts`. There are no frontend tests.

## Pattern

Tests use **Vitest** + **Supertest**. Each suite:

1. Creates a temp directory and points `DATABASE_PATH` at a fresh SQLite file
2. Passes a mock `weatherClient` to `createApp()` — no real API calls are made
3. Cleans up in `afterAll`

```ts
beforeAll(async () => {
  tempDir = await mkdtemp(join(tmpdir(), 'weather-starter-test-'));
  process.env.DATABASE_PATH = join(tempDir, 'weather.db');

  const { createApp } = await import('../server.js');
  app = await createApp({
    serveFrontend: false,
    enableRequestLogging: false,
    weatherClient: {
      async getCurrentWeather() {
        return mockWeatherSnapshot;
      },
    },
  });
});

afterAll(async () => {
  await rm(tempDir, { recursive: true, force: true });
});
```

## Adding tests

- Add new test files alongside the module they test: `foo.ts` → `foo.test.ts`
- Use the `weatherClient` injection to control what the weather API returns
- The `WeatherClient` interface (in `routes/locations.ts`) is the only contract the mock needs to satisfy — one method: `getCurrentWeather(lat, lon): Promise<WeatherSnapshot>`
- Tests run serially (`fileParallelism: false`) to avoid SQLite contention
