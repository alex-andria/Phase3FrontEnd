import React from 'react'
import ParkLearnMore from './ParkLearnMore';

function ListPage({allParksData}) {

    const parkLearnMoreCards = allParksData.map((parkData) => {
        return <ParkLearnMore key={parkData.id} parkData={parkData}/>;
    });

    return(

        <ul className='listPage'>{parkLearnMoreCards}</ul>

        // <div className='listPage'>
        //     {allParksData.map((parkData) => {
        //         return (
        //             <ParkLearnMore 
        //                 key={parkData.id}
        //                 parkID={parkData.id}
        //                 parkName={parkData["park_name"]}
        //                 parkDescription={parkData["description"]}
        //                 parkFee={parkData["fee"]}
        //                 parkImage={parkData["image_url"]}
        //                 parkLocation={parkData["location"]}
        //                 container="listPage"
        //             />
        //         );
        //     })}
        // </div>
    );
}

export default ListPage;