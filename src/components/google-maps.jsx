import { APIProvider, AdvancedMarker, Map } from '@vis.gl/react-google-maps';
import React from 'react';

const apiKey = process.env.GATSBY_GOOGLE_MAPS_API_KEY;
const mapId = process.env.GATSBY_MAP_ID;

const GoogleMaps = ({ coordinates }) => {
  return (
    <APIProvider apiKey={apiKey}>
      <Map
        style={{ height: '100%', width: '100%' }}
        defaultCenter={coordinates}
        defaultZoom={15}
        gestureHandling={'greedy'}
        mapId={mapId}
      >
        <AdvancedMarker position={coordinates} />
      </Map>
    </APIProvider>
  );
};

export default GoogleMaps;
