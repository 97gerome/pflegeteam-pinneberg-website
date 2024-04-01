import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import React from 'react';

const apiKey = process.env.GOOGLE_MAPS_API_KEY;

const coordinates = {
  lat: 53.66120967307211,
  lng: 9.79771487590366,
};

const GoogleMaps = () => {
  return (
    <APIProvider apiKey={apiKey}>
      <Map
        style={{ height: '100%', width: '100%' }}
        defaultCenter={coordinates}
        defaultZoom={15}
        gestureHandling={'greedy'}
      >
        <Marker position={coordinates} />
      </Map>
    </APIProvider>
  );
};

export default GoogleMaps;
