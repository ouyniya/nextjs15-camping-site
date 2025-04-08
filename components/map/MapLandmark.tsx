"use client";

import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet's default styling
import { useState } from "react";
import { useEffect, useRef } from "react";

// Path to your custom pin icon located in /public/images
const iconUrl = "/images/pin.png";

// Create a custom Leaflet marker icon
const markerIcon = L.icon({
  iconUrl: iconUrl,
  iconSize: [30, 30],
});

// Define the type for latitude and longitude as a tuple
type Latlng = [number, number];

// Props type for LocationMarker component
type LocationMarkerProps = {
  position: Latlng | null;
  setPosition: (position: Latlng) => void;
};

// Component that handles clicking on the map to place a marker
function LocationMarker({ position, setPosition }: LocationMarkerProps) {
  const map = useMapEvents({
    click(e) {
      const newLocation: Latlng = [e.latlng.lat, e.latlng.lng];
      setPosition(newLocation); // Update the selected location state
      map.flyTo(e.latlng); // Smoothly move the map to the clicked location
    },
  });

  // If no position is selected yet, don't render a marker
  return position === null ? null : (
    <Marker position={position} icon={markerIcon}>
      <Popup>You are here...</Popup>
    </Marker>
  );
}

// Main map component
const MapLandmark = ({
  location,
}: {
  location?: { lat: number; lng: number };
}) => {
  const mapRef = useRef(null); // Reference to the map container (optional, not actively used here)

  // Default location (e.g., somewhere in Thailand)
  const defaultLocation: Latlng = [13, 100];

  // State to hold the selected position
  const [position, setPosition] = useState<Latlng | null>(null);

  // Fixes the "Map container is already initialized" error by resetting Leaflet's internal ID
  useEffect(() => {
    const container = document.getElementById("map");
    if (container !== null) {
      // @ts-ignore: Suppress TypeScript warning for custom property
      container._leaflet_id = null; // force Leaflet to recreate map
    }
  }, []);

  return (
    <>
      <h1 className="mt-4 font-semibold">Where are you?</h1>

      <input type="hidden" name="lat" value={position ? position[0] : ""} />

      <input type="hidden" name="lng" value={position ? position[1] : ""} />

      <MapContainer
        id="map"
        className="h-[50vh] rounded-lg z-0 relative mb-2"
        center={location || defaultLocation}
        zoom={7}
        scrollWheelZoom={true}
      >
        {/* <Marker position={location || defaultLocation} icon={markerIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}

        <LocationMarker position={position} setPosition={setPosition} />

        <LayersControl>
          <LayersControl.BaseLayer name="Openstreetmap" checked>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="ESRI Imagery">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </>
  );
};

export default MapLandmark;
