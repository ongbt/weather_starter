import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../theme';
import { PaletteIcon } from './icons';

export function ThemeSelector() {
  const { theme, themes, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener('mousedown', handler);
    return () => window.removeEventListener('mousedown', handler);
  }, [open]);

  return (
    <div ref={containerRef} className="relative z-50">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-[var(--border-card)] bg-[var(--surface-08)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-body)] backdrop-blur-xl hover:bg-[var(--surface-14)]"
      >
        <PaletteIcon className="h-3.5 w-3.5" />
        <span>{theme.label}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 min-w-[140px] overflow-hidden rounded-xl border border-[var(--border-card)] bg-[var(--overlay-heavy)] p-1 shadow-2xl backdrop-blur-2xl">
          {themes.map((t) => (
            <button
              key={t.name}
              type="button"
              onClick={() => {
                setTheme(t.name);
                setOpen(false);
              }}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                t.name === theme.name
                  ? 'bg-[var(--surface-14)] text-[var(--text-primary)]'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--surface-08)]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
