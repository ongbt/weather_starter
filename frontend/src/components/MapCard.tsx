import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useStore } from '../state/store';
import { formatTemperature } from './format';
import { CloseIcon, MapPinIcon, ExpandIcon } from './icons';
import type { Location } from '../types';

const TILE_URL = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
const ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>';

function createWeatherPin(loc: Location): L.DivIcon {
  const temp = formatTemperature(loc.weather?.temperature_c);
  const condition = loc.weather?.condition ?? '--';

  return L.divIcon({
    className: 'weather-marker',
    html: `<div class="weather-marker-label"><span class="weather-marker-temp">${temp}</span><span class="weather-marker-condition">${condition}</span></div><div class="weather-marker-dot"></div>`,
    iconSize: [120, 70],
    iconAnchor: [60, 66],
  });
}

function MapBounds({ locations }: { locations: Location[] }) {
  const map = useMap();

  useEffect(() => {
    if (locations.length === 0) return;
    const bounds = L.latLngBounds(
      locations.map((l) => [l.latitude, l.longitude] as [number, number]),
    );
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 12 });
    }
  }, [locations, map]);

  return null;
}

function MapMarkers({ locations, onClick }: { locations: Location[]; onClick: (id: number) => void }) {
  return (
    <>
      {locations.map((loc) => (
        <Marker
          key={loc.id}
          position={[loc.latitude, loc.longitude]}
          icon={createWeatherPin(loc)}
          eventHandlers={{ click: () => onClick(loc.id) }}
        />
      ))}
    </>
  );
}

function MapInner({
  fullscreen,
  locations,
  onMarkerClick,
}: {
  fullscreen: boolean;
  locations: Location[];
  onMarkerClick: (id: number) => void;
}) {
  const center: [number, number] =
    locations.length > 0
      ? [locations[0].latitude, locations[0].longitude]
      : [1.3521, 103.8198];

  return (
    <MapContainer
      center={center}
      zoom={12}
      className="h-full w-full"
      zoomControl={false}
      attributionControl={fullscreen}
      key={fullscreen ? 'fullscreen' : 'card'}
    >
      <TileLayer url={TILE_URL} attribution={ATTRIBUTION} />
      <MapBounds locations={locations} />
      <MapMarkers locations={locations} onClick={onMarkerClick} />
    </MapContainer>
  );
}

export function MapCard() {
  const { locations, select } = useStore();
  const [fullscreen, setFullscreen] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setFullscreen(false);
  }, []);

  useEffect(() => {
    if (!fullscreen) return;
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreen, handleKeyDown]);

  const handleMarkerClick = useCallback(
    (id: number) => {
      select(id);
      setFullscreen(false);
    },
    [select],
  );

  if (locations.length === 0) return null;

  if (fullscreen) {
    return createPortal(
      <div className="fixed inset-0 z-50 flex flex-col bg-[var(--overlay-heavy)] backdrop-blur-xl">
        <div className="relative flex-1">
          <MapInner fullscreen locations={locations} onMarkerClick={handleMarkerClick} />
          <button
            type="button"
            onClick={() => setFullscreen(false)}
            className="absolute right-4 top-4 z-[1000] flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-compass)] bg-[var(--overlay-bg)] text-[var(--text-icon)] backdrop-blur-md hover:bg-[var(--surface-14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
            aria-label="Close map"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
      </div>,
      document.body,
    );
  }

  return (
    <section className="flex flex-col gap-3 rounded-2xl border border-[var(--border-card)] bg-[var(--surface-08)] backdrop-blur-xl">
      <header className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-label)]">
          <MapPinIcon className="h-3.5 w-3.5" />
          <span>Map</span>
        </div>
        <button
          type="button"
          onClick={() => setFullscreen(true)}
          className="rounded-full border border-[var(--border-card)] bg-[var(--surface-08)] p-1.5 text-[var(--text-secondary)] hover:bg-[var(--surface-14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
          aria-label="Expand map"
        >
          <ExpandIcon className="h-4 w-4" />
        </button>
      </header>
      <div className="px-3 pb-3">
        <div className="h-[320px] w-full overflow-hidden rounded-xl">
          <MapInner fullscreen={false} locations={locations} onMarkerClick={handleMarkerClick} />
        </div>
      </div>
    </section>
  );
}
