"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

// Fix for default Leaflet markers in Next.js/React
const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

const customIcon = L.icon({
  iconUrl: iconUrl,
  iconRetinaUrl: iconRetinaUrl,
  shadowUrl: shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

type Project = {
  name: string;
  slug: string;
  location: string;
  description: string;
  image: string;
  coordinates: [number, number];
};

interface MapProps {
  projects: Project[];
}

const mapStyle = { height: "100%", width: "100%", zIndex: 0 };

const Map = ({ projects }: MapProps) => {
  // Use a key that changes on mount to force a fresh MapContainer
  const [mapKey, setMapKey] = useState<string | null>(null);

  useEffect(() => {
    // Generate a unique key on client-side mount
    setMapKey(`map-${Date.now()}`);
  }, []);

  if (!mapKey) return null;

  // Default center (Vancouver area)
  const defaultCenter: [number, number] = [49.2, -122.5];
  const defaultZoom = 9;

  return (
    <MapContainer 
      key={mapKey}
      center={defaultCenter} 
      zoom={defaultZoom} 
      scrollWheelZoom={false} 
      style={mapStyle}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {projects.map((project) => (
        <Marker 
          key={project.slug} 
          position={project.coordinates} 
          icon={customIcon}
        >
          <Popup>
            <div className="flex flex-col gap-2 min-w-[200px]">
              <h3 className="font-bold text-sm">{project.name}</h3>
              <p className="text-xs text-gray-600">{project.location}</p>
              <a href={`/projects/${project.slug}`} className="text-xs text-primary font-bold hover:underline">
                View Project Details
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
