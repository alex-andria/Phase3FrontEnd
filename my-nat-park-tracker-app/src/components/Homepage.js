import React, { useEffect , useState} from 'react';
import { Route } from 'react-router-dom';
import ListPage from './ListsPage';
import ParkLearnMore from './ParkLearnMore';
import BrowsePage from './BrowsePage';
import '../sarah.css'
 
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
import ParkDetailCard from './ParkDetailCard'

function HomePage(){
    // const [allStatesData, setStatesData] = useState([])
    // const [allListsData, setAllListsData] = useState([])
    const [allParksData, setAllParksData] = useState([])


    useEffect(() => {
        fetch('http://localhost:9292/parks')
        .then(r => r.json())
        .then(r => {
            setAllParksData(r)
            console.log(allParksData)
        })
    }, [])

    let featuredPark = allParksData[Math.floor (Math.random () * allParksData.length)]
    let nextAdventurePark = []
    nextAdventurePark = allParksData.filter(park => {
        if(park.state_id === featuredPark.state_id) {
            return park
        } else{
            return 'No other parks in your state'
        }
    })
    console.log(nextAdventurePark)
    let randNextAdvPark1 = nextAdventurePark[Math.floor (Math.random () * nextAdventurePark.length)]
    let randNextAdvPark2 = nextAdventurePark[Math.floor (Math.random () * nextAdventurePark.length)]
    let randNextAdvPark3 = nextAdventurePark[Math.floor (Math.random () * nextAdventurePark.length)]

    // useEffect(()=> {
    //     fetch('http://localhost:9292/states')
    //     .then(r => r.json())
    //     .then(setStatesData)
    // }, [])

    // useEffect(()=> {
    //     fetch('http://localhost:9292/lists')
    //     .then(r => r.json())
    //     .then(setAllListsData)
    // }, [])
    //let image=featuredPark.image_url
    // console.log(image)
    // let name=featuredPark.park_name
    // let description= featuredPark.description

    // useEffect(() => {
    //     // let current_lat = 37.625789;
    //     // let current_long = 95.0547899;
    //     // let current_zoom = 16;
    //     // let center_lat = current_lat;
    //     // let center_long = current_long;
    //     // let center_zoom = current_zoom;
    if(allParksData.length === 0){
        return (
            <div className='loading'>
                <h2>Loading Parks...</h2>
            </div>
        )
    } else{
        return (
            <div className="HomePage">
                
                <Route exact path='/listpage'>
                    <ListPage 
                    allParksData={allParksData} 
                    //allStatesData={allStatesData} allListsData={allListsData}
                    /> 
                </Route>
                <Route exact path='/'>
                    <h2 id='heading'><em>Featured National Park</em></h2>
                    <div id='featuredPark'>
                        <ParkDetailCard 
                            key={featuredPark.id}
                            parkName={featuredPark.park_name}
                            parkDescription={featuredPark["description"]}
                            parkImage={featuredPark["image_url"]}
                        />
                    </div>
                    <h2 id='nextAdventure'><em>Your Next Adventure!</em></h2>
                    <div className='nextAdventureParks'>
                        <div id='Adventure'>
                            <ParkDetailCard
                                key={randNextAdvPark1.id}
                                parkName={randNextAdvPark1.park_name}
                                parkImage={randNextAdvPark1["image_url"]}
                            />
                        </div>
                        <div id='Adventure'>
                            <ParkDetailCard
                                key={randNextAdvPark2.id}
                                parkName={randNextAdvPark2.park_name}
                                parkImage={randNextAdvPark2["image_url"]}
                            />
                        </div>
                        <div id='Adventure'>
                            <ParkDetailCard
                                key={randNextAdvPark3.id}
                                parkName={randNextAdvPark3.park_name}
                                parkImage={randNextAdvPark3["image_url"]}
                            />
                        </div>
                    </div>
                        <div id="map"></div>
                </Route>
    
                <Route exact path='/browsepage'>
                    <BrowsePage 
                    allParksData={allParksData} setAllParksData={setAllParksData}
                    //allStatesData={allStatesData} allListsData={allListsData}
                    />
                </Route>
    
                <Route exact path='/parks/:id'>
                    <ParkLearnMore 
                    allParksData={allParksData} 
                    //allStatesData={allStatesData} allListsData={allListsData}
                    />
                </Route>
            </div>
        );
    }
}

export default HomePage

    //     // The <div id="map"> must be added to the dom before calling L.map('map')
    //       let map = L.map('map').setView([39.960,-75.210],14);

    //     //alternative to api mapbox
    //       L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //         attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //       }).addTo(map);

        //   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        //     maxZoom: 18,
        //     id: 'mapbox/streets-v11',
        //     tileSize: 512,
        //     zoomOffset: -1,
        //     accessToken: 'pk.eyJ1IjoiZGFudG9uaW9hIiwiYSI6ImNreXZwN3ZseTAwZ20ybnFwYjAyaGIxY3AifQ.qHMC48i5Mxq5Hakuzhii2w'
        // }).addTo(map);

        // var NPMap = {
        //     div: 'map',
        //     overlays: [{
        //     filter: function (feature) {
        //         return feature.properties.park === 'Yellowstone';
        //     },
        //     popup: {
        //         title: '{{name}}'
        //     },
        //     styles: {
        //         point: {
        //         'marker-symbol': 'star'
        //         }
        //     },
        //     type: 'geojson',
        //     url: 'https://www.nps.gov/lib/npmap.js/4.0.0/examples/data/gateway-points-of-interest.geojson'
        //     }, {
        //     popup: {
        //         description: 'The alpha code is {{Code}}',
        //         title: '{{Name}}'
        //     },
        //     styles: {
        //         point: {
        //         'marker-color': '#609321',
        //         'marker-symbol': 'park'
        //         }
        //     },
        //     type: 'geojson',
        //     url: 'https://www.nps.gov/lib/npmap.js/4.0.0/examples/data/national-parks.geojson'
        //     }]
        // };

        // L.geoJSON(NPMap).addTo(map);

// });

