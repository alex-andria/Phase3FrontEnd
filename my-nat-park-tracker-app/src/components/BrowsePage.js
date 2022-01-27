import React, { useState } from 'react'
import ParkDetailCard from './ParkDetailCard'
import ParkModal from './ParkModal'
import '../sarah.css'

function BrowsePage({allParksData, setAllParksData, allStatesData}) {

    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        park_name: "",
        description: "",
        fee: "",
        image_url: "",
        location: "",
        states: "",
        website: "",
        state_id: "",
    })

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [key]:value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        

        fetch('http://localhost:9292/parks', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }).then(res => res.json())
        .then((newPark) => {
            setAllParksData([newPark,...allParksData])
        })
            
        this.mainInput.value = "";
    }
    
    return (
        <div className='BrowsePage'>
            <h2 className='newPark'>Can't find your park?</h2>
            <button className='primaryBtn' onClick={()=> setIsOpen(true)}>+ Add New Park</button>
            {isOpen && <ParkModal setIsOpen={setIsOpen} onSubmit={handleSubmit} onChange={handleChange} formData={formData}  allStatesData={allStatesData}/>}
            <h2 className='BrowseParks'>Browse Parks</h2>
            <ul id = "ParkInfo">
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