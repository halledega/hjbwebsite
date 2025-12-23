"use client";

import { MapContainer, TileLayer, Marker, Popup, CircleMarker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

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
  projects?: Project[];
  center?: [number, number];
  zoom?: number;
  showOffice?: boolean;
}

const mapStyle = { height: "100%", width: "100%", zIndex: 0 };

// Component to handle map view updates
const MapController = ({ center, zoom }: { center: [number, number], zoom: number }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const Map = ({ projects = [], center, zoom, showOffice = false }: MapProps) => {
  // Actual office coordinates: 110 2920 Virtual Way, Vancouver, BC V5M 0C4
  const officeCenter: [number, number] = [49.261096, -123.041937];
  const defaultCenter = center || officeCenter;
  const defaultZoom = zoom || (showOffice ? 11 : 9); // Zoom 11 covers Greater Vancouver well

  return (
    <MapContainer 
      center={defaultCenter} 
      zoom={defaultZoom} 
      scrollWheelZoom={false} 
      style={mapStyle}
    >
      <MapController center={defaultCenter} zoom={defaultZoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {showOffice && (
        <Marker position={officeCenter} icon={customIcon}>
          <Popup>
            <div className="flex flex-col gap-1 min-w-[150px]">
              <h3 className="font-bold text-sm text-secondary">HJB Engineering</h3>
              <p className="text-xs text-gray-600">
                110 2920 Virtual Way<br />
                Vancouver, BC V5M 0C4
              </p>
            </div>
          </Popup>
        </Marker>
      )}

      {projects.map((project) => (
        <CircleMarker 
          key={project.slug} 
          center={project.coordinates} 
          radius={8}
          pathOptions={{ color: '#00539b', fillColor: '#00539b', fillOpacity: 0.6, weight: 2 }}
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
        </CircleMarker>
      ))}
    </MapContainer>
  );
};

export default Map;
