import React from 'react'
import { Link } from 'react-router-dom';

function ParkDetailCard({parkName, parkDescription, parkImage, container = "container"}) { 


    return (
            <div id='parkDetails' className={`${container}`}>
                <li>
                    <img className="parkImage" src={parkImage} alt={parkName}/><br />
                    <Link id='browsepage' to='/parks/:id'><span className="parkName">{parkName}</span></Link>
                    <br/>
                    {/* <span className="parkName">{parkName}</span><br /> */}
                    <span className="parkDescription"> {parkDescription}</span><br />
                </li>
            </div>
    )
}

export default ParkDetailCard