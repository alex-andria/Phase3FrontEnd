import React from 'react'

function ParkDetailCard({parkName}) {

    return (
        
            <div>
                <li>
                    <span className="parkName">{parkName}</span>
                </li>
            </div>
    )
}

export default ParkDetailCard