import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export interface ThemeConfig {
  name: string;
  label: string;
  bodyBg: string;
  surface04: string;
  surface06: string;
  surface07: string;
  surface08: string;
  surface10: string;
  surface12: string;
  surface14: string;
  surface20: string;
  sidebarBg: string;
  overlayBg: string;
  overlayHeavy: string;
  textPlaceholder: string;
  textMuted: string;
  textLabel: string;
  textLabelHeavy: string;
  textSecondary: string;
  textSecondaryVariant: string;
  textIcon: string;
  textBody: string;
  textNearPrimary: string;
  textPrimary: string;
  borderSubtle: string;
  borderDivider: string;
  borderCard: string;
  borderCompass: string;
  borderSelected: string;
  focusRing: string;
  btnPrimaryBg: string;
  btnPrimaryText: string;
  errorText: string;
  errorBg: string;
  errorBorder: string;
  scrollbarThumb: string;
  scrollbarTrack: string;
}

const appleTheme: ThemeConfig = {
  name: 'apple',
  label: 'Apple',
  bodyBg:
    'radial-gradient(120% 80% at 70% 0%, rgba(255, 255, 255, 0.18) 0%, transparent 55%), radial-gradient(90% 70% at 10% 100%, rgba(80, 110, 150, 0.55) 0%, transparent 60%), linear-gradient(170deg, #6f8aa8 0%, #5a7591 35%, #4a627c 65%, #3c5066 100%)',
  surface04: 'rgba(255, 255, 255, 0.04)',
  surface06: 'rgba(255, 255, 255, 0.06)',
  surface07: 'rgba(255, 255, 255, 0.07)',
  surface08: 'rgba(255, 255, 255, 0.08)',
  surface10: 'rgba(255, 255, 255, 0.10)',
  surface12: 'rgba(255, 255, 255, 0.12)',
  surface14: 'rgba(255, 255, 255, 0.14)',
  surface20: 'rgba(255, 255, 255, 0.20)',
  sidebarBg: 'rgba(0, 0, 0, 0.20)',
  overlayBg: 'rgba(0, 0, 0, 0.50)',
  overlayHeavy: 'rgba(0, 0, 0, 0.95)',
  textPlaceholder: 'rgba(255, 255, 255, 0.50)',
  textMuted: 'rgba(255, 255, 255, 0.55)',
  textLabel: 'rgba(255, 255, 255, 0.60)',
  textLabelHeavy: 'rgba(255, 255, 255, 0.65)',
  textSecondary: 'rgba(255, 255, 255, 0.70)',
  textSecondaryVariant: 'rgba(255, 255, 255, 0.75)',
  textIcon: 'rgba(255, 255, 255, 0.80)',
  textBody: 'rgba(255, 255, 255, 0.85)',
  textNearPrimary: 'rgba(255, 255, 255, 0.90)',
  textPrimary: 'rgba(255, 255, 255, 0.95)',
  borderSubtle: 'rgba(255, 255, 255, 0.05)',
  borderDivider: 'rgba(255, 255, 255, 0.10)',
  borderCard: 'rgba(255, 255, 255, 0.15)',
  borderCompass: 'rgba(255, 255, 255, 0.20)',
  borderSelected: 'rgba(255, 255, 255, 0.30)',
  focusRing: 'rgba(255, 255, 255, 0.40)',
  btnPrimaryBg: 'rgba(255, 255, 255, 0.90)',
  btnPrimaryText: '#0f172a',
  errorText: '#fee2e2',
  errorBg: 'rgba(239, 68, 68, 0.15)',
  errorBorder: 'rgba(252, 165, 165, 0.30)',
  scrollbarThumb: 'rgba(255, 255, 255, 0.18)',
  scrollbarTrack: 'transparent',
};

const midnightInkTheme: ThemeConfig = {
  name: 'midnight-ink',
  label: 'Midnight Ink',
  bodyBg: '#0a0a0f',
  surface04: 'rgba(255, 255, 255, 0.03)',
  surface06: 'rgba(255, 255, 255, 0.05)',
  surface07: '#17171c',
  surface08: '#1a1a20',
  surface10: '#1e1e26',
  surface12: '#25252e',
  surface14: '#2c2c36',
  surface20: '#3a3a48',
  sidebarBg: 'rgba(10, 10, 15, 0.95)',
  overlayBg: 'rgba(10, 10, 15, 0.88)',
  overlayHeavy: 'rgba(10, 10, 15, 0.98)',
  textPlaceholder: 'rgba(240, 240, 245, 0.30)',
  textMuted: 'rgba(240, 240, 245, 0.40)',
  textLabel: 'rgba(240, 240, 245, 0.50)',
  textLabelHeavy: 'rgba(240, 240, 245, 0.55)',
  textSecondary: 'rgba(240, 240, 245, 0.60)',
  textSecondaryVariant: 'rgba(240, 240, 245, 0.68)',
  textIcon: 'rgba(240, 240, 245, 0.75)',
  textBody: 'rgba(240, 240, 245, 0.85)',
  textNearPrimary: 'rgba(240, 240, 245, 0.92)',
  textPrimary: '#f0f0f5',
  borderSubtle: 'rgba(255, 255, 255, 0.04)',
  borderDivider: 'rgba(255, 255, 255, 0.07)',
  borderCard: 'rgba(255, 255, 255, 0.09)',
  borderCompass: 'rgba(255, 255, 255, 0.12)',
  borderSelected: 'rgba(124, 58, 237, 0.45)',
  focusRing: 'rgba(124, 58, 237, 0.55)',
  btnPrimaryBg: '#7c3aed',
  btnPrimaryText: '#ffffff',
  errorText: '#fecaca',
  errorBg: 'rgba(239, 68, 68, 0.12)',
  errorBorder: 'rgba(239, 68, 68, 0.25)',
  scrollbarThumb: 'rgba(255, 255, 255, 0.10)',
  scrollbarTrack: 'transparent',
};

const sunbleachedTheme: ThemeConfig = {
  name: 'sunbleached',
  label: 'Sunbleached',
  bodyBg:
    'linear-gradient(170deg, #fef7ed 0%, #fef0d5 35%, #fde8c0 65%, #fce0ad 100%)',
  surface04: 'rgba(180, 120, 60, 0.04)',
  surface06: 'rgba(180, 120, 60, 0.06)',
  surface07: '#fef7ed',
  surface08: '#fdf3e2',
  surface10: '#fcead0',
  surface12: '#fae2c4',
  surface14: '#f7d9b4',
  surface20: '#f0cfa0',
  sidebarBg: 'rgba(255, 248, 238, 0.92)',
  overlayBg: 'rgba(30, 20, 10, 0.60)',
  overlayHeavy: 'rgba(30, 20, 10, 0.92)',
  textPlaceholder: 'rgba(120, 70, 30, 0.35)',
  textMuted: 'rgba(120, 70, 30, 0.45)',
  textLabel: 'rgba(120, 70, 30, 0.55)',
  textLabelHeavy: 'rgba(120, 70, 30, 0.62)',
  textSecondary: 'rgba(100, 55, 20, 0.65)',
  textSecondaryVariant: 'rgba(100, 55, 20, 0.72)',
  textIcon: 'rgba(100, 55, 20, 0.78)',
  textBody: 'rgba(80, 40, 15, 0.85)',
  textNearPrimary: '#4a2810',
  textPrimary: '#3a1e08',
  borderSubtle: 'rgba(180, 130, 80, 0.10)',
  borderDivider: 'rgba(180, 130, 80, 0.15)',
  borderCard: 'rgba(180, 130, 80, 0.22)',
  borderCompass: 'rgba(180, 130, 80, 0.28)',
  borderSelected: 'rgba(180, 100, 40, 0.40)',
  focusRing: 'rgba(200, 120, 40, 0.50)',
  btnPrimaryBg: '#b45309',
  btnPrimaryText: '#fffbeb',
  errorText: '#7f1d1d',
  errorBg: 'rgba(220, 60, 40, 0.10)',
  errorBorder: 'rgba(200, 50, 30, 0.25)',
  scrollbarThumb: 'rgba(160, 110, 70, 0.20)',
  scrollbarTrack: 'transparent',
};

const themes: ThemeConfig[] = [appleTheme, midnightInkTheme, sunbleachedTheme];

function applyTheme(t: ThemeConfig) {
  const root = document.documentElement;
  root.style.setProperty('--body-bg', t.bodyBg);
  root.style.setProperty('--surface-04', t.surface04);
  root.style.setProperty('--surface-06', t.surface06);
  root.style.setProperty('--surface-07', t.surface07);
  root.style.setProperty('--surface-08', t.surface08);
  root.style.setProperty('--surface-10', t.surface10);
  root.style.setProperty('--surface-12', t.surface12);
  root.style.setProperty('--surface-14', t.surface14);
  root.style.setProperty('--surface-20', t.surface20);
  root.style.setProperty('--sidebar-bg', t.sidebarBg);
  root.style.setProperty('--overlay-bg', t.overlayBg);
  root.style.setProperty('--overlay-heavy', t.overlayHeavy);
  root.style.setProperty('--text-placeholder', t.textPlaceholder);
  root.style.setProperty('--text-muted', t.textMuted);
  root.style.setProperty('--text-label', t.textLabel);
  root.style.setProperty('--text-label-heavy', t.textLabelHeavy);
  root.style.setProperty('--text-secondary', t.textSecondary);
  root.style.setProperty('--text-secondary-variant', t.textSecondaryVariant);
  root.style.setProperty('--text-icon', t.textIcon);
  root.style.setProperty('--text-body', t.textBody);
  root.style.setProperty('--text-near-primary', t.textNearPrimary);
  root.style.setProperty('--text-primary', t.textPrimary);
  root.style.setProperty('--border-subtle', t.borderSubtle);
  root.style.setProperty('--border-divider', t.borderDivider);
  root.style.setProperty('--border-card', t.borderCard);
  root.style.setProperty('--border-compass', t.borderCompass);
  root.style.setProperty('--border-selected', t.borderSelected);
  root.style.setProperty('--focus-ring', t.focusRing);
  root.style.setProperty('--btn-primary-bg', t.btnPrimaryBg);
  root.style.setProperty('--btn-primary-text', t.btnPrimaryText);
  root.style.setProperty('--error-text', t.errorText);
  root.style.setProperty('--error-bg', t.errorBg);
  root.style.setProperty('--error-border', t.errorBorder);
  root.style.setProperty('--scrollbar-thumb', t.scrollbarThumb);
  root.style.setProperty('--scrollbar-track', t.scrollbarTrack);
}

interface ThemeContextValue {
  theme: ThemeConfig;
  themes: ThemeConfig[];
  setTheme: (name: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeConfig>(() => {
    const stored = localStorage.getItem('weather-theme');
    return themes.find((t) => t.name === stored) ?? appleTheme;
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = (name: string) => {
    const next = themes.find((t) => t.name === name) ?? appleTheme;
    localStorage.setItem('weather-theme', next.name);
    setThemeState(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, themes, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}
