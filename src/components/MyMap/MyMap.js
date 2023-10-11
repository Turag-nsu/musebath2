import React, { useState } from 'react';
import './MyMap.css';
import Map, { Marker, Popup } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
const MyMap = () => {
  

  return (
    <div className='custom-map'>
      
      <Map mapLib = {maplibregl}
        initialViewState={{
          longitude: -90.260540,
          latitude: 38.649615,
          zoom: 12,
         
        }}
        style={{ width: "40rem", height: '35rem' }}
        mapStyle = 'https://api.maptiler.com/maps/streets/style.json?key=LjtMlun2ItzC4SpG4DFp'
        >
          <Marker
            longitude={-90.260540}
            latitude={38.649615}
            color = 'red'
            ></Marker>
        </Map>
    </div>
  );
};

export default MyMap;
