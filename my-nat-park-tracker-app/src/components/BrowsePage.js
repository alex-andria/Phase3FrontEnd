import React, { useState } from 'react';
import ParkDetailCard from './ParkDetailCard';
import ParkModal from './ParkModal';
import '../sarah.css';
import Sort from './Sort';
import ParkLearnMore from './ParkLearnMore';
import MyMap from './MyMap';

function BrowsePage({allParksData, results, setResults, setAllParksData, allStatesData, sort, setSort, sortResults}) {

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
            <MyMap/>
            <h2 className='newPark'>Can't find your park?</h2>
            <button className='primaryBtn' onClick={()=> setIsOpen(true)}>+ Add New Park</button>
            {isOpen && <ParkModal setIsOpen={setIsOpen} onSubmit={handleSubmit} onChange={handleChange} formData={formData}  allStatesData={allStatesData}/>}
            <h2 className='BrowseParks'>Browse Parks</h2>
            <Sort sort = {sort} setSort ={setSort} results = {results} setResults = {setResults} sortResults = {sortResults}> </Sort>
            <ul id = "ParkInfo">
                {results.map((parkData) =>
                    <ParkDetailCard 
                        key={parkData.id}
                        parkName={parkData["park_name"]}
                        parkDescription={parkData["description"]}
                        parkImage={parkData["image_url"]}
                        container="parkDetailsContainer"
                    />
                )}
            </ul>
        </div>
    )
}
 
export default BrowsePage;