// src/components/maps/MapComponent.jsx

import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';

const MapComponent = ({ events = [] }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN;

  if (!mapboxToken) {
    return (
      <div className="text-red-600">
        Mapbox token is missing. Please set <strong>VITE_MAPBOX_TOKEN</strong> in your <em>.env</em> file.
      </div>
    );
  }

  return (
    <Map
      initialViewState={{
        latitude: 40.7128,
        longitude: -74.0060,
        zoom: 12,
      }}
      style={{ width: '100%', height: '500px' }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={mapboxToken} // Updated here
    >
      {events.map((event) => (
        <Marker
          key={event.id}
          latitude={event.latitude}
          longitude={event.longitude}
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setSelectedItem(event);
          }}
        >
          <img
            src={`/assets/icons/event-marker.png`}
            alt={event.name}
            className="h-8 w-8"
          />
        </Marker>
      ))}

      {selectedItem && (
        <Popup
          latitude={selectedItem.latitude}
          longitude={selectedItem.longitude}
          onClose={() => setSelectedItem(null)}
        >
          <div>
            <h3 className="font-bold">{selectedItem.name}</h3>
            <p>{selectedItem.description}</p>
          </div>
        </Popup>
      )}
    </Map>
  );
};

export default MapComponent;