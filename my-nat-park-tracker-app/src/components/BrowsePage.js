import React from 'react'
import ParkDetailCard from './ParkDetailCard'

function BrowsePage({allParksData}) {

    // useEffect(()=> {
    //     fetch('http://localhost:9292/')
    //     .then(r => r.json())
    //     .then(data => console.log('hello'))
    // }, [])



    return (
        <div className='BrowsePage'>
            <h2 className='BrowseParks'>Browse Parks</h2>
            <ul className = "ParkInfo">
                {allParksData.map((parkData) =>
                <ParkDetailCard 
                    key={parkData.id}
                    parkName={parkData["park_name"]}
                    parkDescription={parkData["description"]}
                    parkImage={parkData["image_url"]}
                />
                )}
            </ul>
        </div>
    )
}

export default BrowsePage;