import React, { useEffect } from 'react'
import ParkDetailCard from './ParkDetailCard'

function BrowsePage({allParksData}) {

    // useEffect(()=> {
    //     fetch('http://localhost:9292/')
    //     .then(r => r.json())
    //     .then(data => console.log('hello'))
    // }, [])



    return (
        <div className='BrowsePage'>
            <ul className = "ParkInfo">
                {allParksData.map((parkData) =>
                <ParkDetailCard 
                    key={parkData.id}
                    parkName={parkData["park_name"]}
                    parkName={parkData["park_name"]}
                />
                )}
            </ul>
        </div>
    )
}

export default BrowsePage;