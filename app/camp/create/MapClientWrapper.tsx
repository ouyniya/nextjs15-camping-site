"use client";

import dynamic from "next/dynamic";

// Dynamic import with SSR disabled inside a client component
const MapLandmark = dynamic(() => import("@/components/map/MapLandmark"), {
  ssr: false,
});

export default function MapClientWrapper() {
  return <MapLandmark />;
}
