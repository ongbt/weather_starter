import { ThemeProvider } from './theme';
import { StoreProvider } from './state/store';
import { Layout } from './components/Layout';

export function App() {
  return (
    <ThemeProvider>
      <StoreProvider>
        <Layout />
      </StoreProvider>
    </ThemeProvider>
  );
}
