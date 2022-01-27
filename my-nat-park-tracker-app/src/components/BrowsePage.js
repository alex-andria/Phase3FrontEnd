import React, { useState } from 'react'
import ParkDetailCard from './ParkDetailCard'
import ParkModal from './ParkModal'
import '../sarah.css'



function BrowsePage({allParksData, setAllParksData}) {

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
    // let newPark = formData
    // function onAddPark(newPark){
    //     setAllParksData([...allParksData, newPark])
    // }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('new park trying to be added')
        // The above console.log does not work

        fetch('http://localhost:9292/parks', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }).then(res => res.json())
        .then((newPark) => {
            setAllParksData([newPark,...allParksData])
            console.log('new park added')
        })
            
            //history.push('/parks')
            // setFormData({
            //     park_name: "",
            //     description: "",
            //     fee: "",
            //     image_url: "",
            //     location: "",
            //     states: "",
            //     website: "",
            //     state_id: "",
            // });
        this.mainInput.value = "";
        
    }
    console.log(formData)
    // Based off the above console.log, we can see that as we type stuff into the form, it does populate the formData object- so at least that's working
    return (
        <div className='BrowsePage'>
            <h2 className='newPark'>Can't find your park?</h2>
            <button className='primaryBtn' onClick={()=> setIsOpen(true)}>+ Add New Park</button>
            {isOpen && <ParkModal setIsOpen={setIsOpen} onSubmit={handleSubmit} onChange={handleChange} formData={formData}/>}
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