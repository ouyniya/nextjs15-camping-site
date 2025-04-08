"use client";

import dynamic from "next/dynamic";

// Dynamic import with SSR disabled inside a client component
const MapLandmark = dynamic(() => import("@/components/map/MapLandmark"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

export default function MapClientWrapper() {
  return <MapLandmark />;
}
