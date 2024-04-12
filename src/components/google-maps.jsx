import { APIProvider, AdvancedMarker, Map } from '@vis.gl/react-google-maps';
import React from 'react';

const apiKey = process.env.GATSBY_GOOGLE_MAPS_API_KEY;
const mapId = process.env.GATSBY_MAP_ID;

const GoogleMaps = ({ coordinates, controlled }) => {
  return (
    <APIProvider apiKey={apiKey}>
      <Map
        style={{ height: '100%', width: '100%' }}
        defaultCenter={coordinates}
        defaultZoom={15}
        gestureHandling={'greedy'}
        mapId={mapId}
        controlled={controlled}
        center={controlled ? coordinates : null}
        zoom={controlled ? 15 : null}
        fullscreenControl={false}
        mapTypeControl={false}
        zoomControl={controlled ? false : true}
        streetViewControl={controlled ? false : true}
      >
        <AdvancedMarker position={coordinates} />
      </Map>
    </APIProvider>
  );
};

export default GoogleMaps;
