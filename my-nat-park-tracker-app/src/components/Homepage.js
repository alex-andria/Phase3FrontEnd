import React, { useEffect , useState} from 'react';
import { Route } from 'react-router-dom';
import ListPage from './ListsPage';
// import ParkLearnMore from './ParkLearnMore';
import BrowsePage from './BrowsePage';
import '../sarah.css'
import ParkDetailCard from './ParkDetailCard'

function HomePage({results, setResults}){

    const [allParksData, setAllParksData] = useState([])
    const [allStatesData, setStatesData] = useState([])
    const [allListsData, setAllListsData] = useState([])
    const [sort, setSort] = useState("default");

    function ascending() {
        function compare( a, b ) {
            if ( a.park_name < b.park_name ){
              return -1;
            }
            if ( a.park_name > b.park_name ){
              return 1;
            }
            return 0;
          }
        let parks = results.sort(compare);
        return parks
    }
    function descending() {
        function compare( a, b ) {
            if ( a.park_name > b.park_name ){
              return -1;
            }
            if ( a.park_name < b.park_name ){
              return 1;
            }
            return 0;
          }
        let parks = results.sort(compare);
        return parks
    }
    function sortByCostLowToHigh() {
        function compare( a, b ) {
            if ( a.fee < b.fee ){
              return -1;
            }
            if ( a.fee > b.fee ){
              return 1;
            }
            return 0;
          }
        let parks = results.sort(compare);
        return parks
    }
    function handleSort(sort) {
    if(sort === "ascending") 
    {   
      return ascending();       
    } 
    else if(sort === "descending")
    {
      return descending();
    }
    else if(sort ==="low-to-high")
    {
       return sortByCostLowToHigh();
    }
    else if(sort ==="default"){
        return results
    }}
    
    const sortResults = handleSort(sort)

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

    useEffect(()=> {
        fetch('http://localhost:9292/states')
        .then(r => r.json())
        .then(setStatesData)
    }, [])

    useEffect(()=> {
        fetch('http://localhost:9292/parks')
        .then(r => r.json())
        .then(setAllParksData)
    }, [])

    useEffect(()=> {
        fetch('http://localhost:9292/lists')
        .then(r => r.json())
        .then(setAllListsData)
    }, [])
    
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
                    allStatesData={allStatesData} allListsData={allListsData}
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
                    results={results} allParksData={allParksData} setAllParksData={setAllParksData} sortResults = {sortResults}
                    allStatesData={allStatesData} setResults = {setResults} sort = {sort} setSort = {setSort}
                    />
                </Route>
    
                {/* <Route exact path='/parks/:id'>
                    <ParkLearnMore 
                    allParksData={allParksData} 
                    allStatesData={allStatesData} allListsData={allListsData}
                    />
                </Route> */}
            </div>
        );
    }
}

export default HomePage
