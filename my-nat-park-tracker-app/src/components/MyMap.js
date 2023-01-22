import React, {useEffect, useRef} from "react";
import L from 'leaflet';
import { MapContainer, GeoJSON, TileLayer, Marker, Popup } from "react-leaflet";
import mapData from "./../data/parks.json";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function MyMap(){

  function onEachFeature(feature, layer){
    const { properties = {} } = feature;
    const { Name } = properties;

    if (!Name) return;

    layer.bindPopup(`<p>${Name}</p>`);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center"}}>National Parks Map</h1>
      <MapContainer style={{ height: 400 }} zoom={4} center={[40, -100]}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON 
          data={mapData.features}
          onEachFeature = {onEachFeature}
        />


      </MapContainer>
    </div>
);

}

export default MyMap;

