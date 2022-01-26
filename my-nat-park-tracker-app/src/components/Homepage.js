import React from 'react';
import { Route } from 'react-router-dom';
import ListPage from './ListsPage';
import { useEffect } from 'react';
// 
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
//import ParkDetails from './components/parkdetails'

function HomePage(){
    useEffect(() => {
        // let current_lat = 37.625789;
        // let current_long = 95.0547899;
        // let current_zoom = 16;
        // let center_lat = current_lat;
        // let center_long = current_long;
        // let center_zoom = current_zoom;

        // The <div id="map"> must be added to the dom before calling L.map('map')
          let map = L.map('map').setView([39.960,-75.210],14);

        //alternative to api mapbox
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);

        //   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        //     maxZoom: 18,
        //     id: 'mapbox/streets-v11',
        //     tileSize: 512,
        //     zoomOffset: -1,
        //     accessToken: 'pk.eyJ1IjoiZGFudG9uaW9hIiwiYSI6ImNreXZwN3ZseTAwZ20ybnFwYjAyaGIxY3AifQ.qHMC48i5Mxq5Hakuzhii2w'
        // }).addTo(map);

        var NPMap = {
            div: 'map',
            overlays: [{
            filter: function (feature) {
                return feature.properties.park === 'Yellowstone';
            },
            popup: {
                title: '{{name}}'
            },
            styles: {
                point: {
                'marker-symbol': 'star'
                }
            },
            type: 'geojson',
            url: 'https://www.nps.gov/lib/npmap.js/4.0.0/examples/data/gateway-points-of-interest.geojson'
            }, {
            popup: {
                description: 'The alpha code is {{Code}}',
                title: '{{Name}}'
            },
            styles: {
                point: {
                'marker-color': '#609321',
                'marker-symbol': 'park'
                }
            },
            type: 'geojson',
            url: 'https://www.nps.gov/lib/npmap.js/4.0.0/examples/data/national-parks.geojson'
            }]
        };

        // L.geoJSON(NPMap).addTo(map);

});





    return (
        <div className="HomePage">
            
            <Route exact path='/listpage'>
                <ListPage/>
            </Route>
            <Route exact path='/'>
                <h2 id='heading'>Featured National Park</h2>
                    <div id="map"></div>
            </Route>
        </div>
    );
}

export default HomePage