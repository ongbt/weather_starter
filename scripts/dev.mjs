import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const portlessPath = join(__dirname, '..', 'node_modules', '.bin', 'portless.cmd');

const nodeOptions = [process.env.NODE_OPTIONS, '--disable-warning=ExperimentalWarning']
  .filter(Boolean)
  .join(' ');

const child = spawn(
  portlessPath,
  ['run', '--name', 'weather-starter', 'tsx', 'watch', 'backend/src/server.ts'],
  {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      NODE_OPTIONS: nodeOptions,
      PORTLESS_HTTPS: process.env.PORTLESS_HTTPS ?? '0',
      PORTLESS_PORT: process.env.PORTLESS_PORT ?? '1355',
    },
  }
);

child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 0);
});
