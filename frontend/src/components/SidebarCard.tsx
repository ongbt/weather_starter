import { useStore } from '../state/store';
import { CloudIcon, HomeIcon } from './icons';
import { formatTemperature, formatTime } from './format';
import type { KeyboardEvent } from 'react';
import type { Location } from '../types';

interface SidebarCardProps {
  location: Location;
  isHome: boolean;
}

export function SidebarCard({ location, isHome }: SidebarCardProps) {
  const { selectedId, select, remove } = useStore();
  const isSelected = selectedId === location.id;
  const observed = formatTime(location.weather.observed_at);
  const area =
    location.weather.area || `${location.latitude.toFixed(3)}, ${location.longitude.toFixed(3)}`;
  const condition = location.weather.condition || '-';
  const temperature = formatTemperature(location.weather.temperature_c);
  const high = formatTemperature(location.weather.forecast_high_c);
  const low = formatTemperature(location.weather.forecast_low_c);

  const onSelect = () => select(location.id);
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect();
    }
  };
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={onKeyDown}
      aria-pressed={isSelected}
      className={`group relative w-full cursor-pointer overflow-hidden rounded-2xl border text-left backdrop-blur-xl transition ${
        isSelected
          ? 'border-[var(--border-selected)] bg-[var(--surface-20)] shadow-lg shadow-black/20'
          : 'border-[var(--border-divider)] bg-[var(--surface-07)] hover:bg-[var(--surface-12)]'
      }`}
    >
      <button
        type="button"
        aria-label={`Remove ${area}`}
        onClick={(e) => {
          e.stopPropagation();
          void remove(location.id);
        }}
        className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-[var(--text-placeholder)] opacity-0 transition hover:bg-[var(--surface-10)] hover:text-[var(--text-icon)] group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
        </svg>
      </button>
      <div className="flex items-start justify-between gap-3 px-4 pt-3">
        <div className="min-w-0">
          <div className="truncate text-lg font-semibold leading-tight text-white">{area}</div>
          <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-[var(--text-secondary)]">
            {isHome ? (
              <>
                <span>My Location</span>
                <span className="text-[var(--text-placeholder)]">·</span>
                <HomeIcon className="h-3 w-3" />
                <span>Home</span>
              </>
            ) : observed ? (
              <span>{observed}</span>
            ) : (
              <span className="text-[var(--text-placeholder)]">Not refreshed</span>
            )}
          </div>
        </div>
        <div className="text-3xl font-light tabular-nums text-[var(--text-near-primary)]">{temperature}</div>
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-[var(--border-divider)] px-4 py-2 text-xs">
        <div className="flex items-center gap-2 text-[var(--text-icon)]">
          <CloudIcon className="h-4 w-4 text-[var(--text-secondary)]" />
          <span>{condition}</span>
        </div>
        <div className="text-[var(--text-label)] tabular-nums">
          H:{high} L:{low}
        </div>
      </div>
    </div>
  );
}
