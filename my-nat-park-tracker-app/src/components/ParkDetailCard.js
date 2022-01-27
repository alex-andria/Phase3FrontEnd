import React from 'react'

function ParkDetailCard({parkName, parkDescription, parkImage}) {

    return (
        
            <div id='parkDetails'>
                <li>
                    <img className="parkImage" src={parkImage} alt={parkName}/><br />
                    <span className="parkName">{parkName}</span><br />
                    <span className="parkDescription"> {parkDescription}</span><br />
                    
                </li>
            </div>
    )
}

export default ParkDetailCard