import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyMap from "./MyMap";


function ParkLearnMoreDetail(){
    // const [park, setPark] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);

    // const params = useParams();
    
    // useEffect(() => {
    //   fetch(`http://localhost:3000/parks/${params.id}`)
    //     .then((r) => r.json())
    //     .then((park) => {
    //       console.log(park)
    //       // setPark(park);
    //       // setIsLoaded(true);
    //     });
    // }, [params]);

    return(
        <>
        {/* <div className = "learnMoreCard" id = "learnMoreCard">
          <span className="header">{parkName}</span>
          <button className="addParkButton">+ Add Park to</button>
          <br/>
          <img className="parkImage" src={parkImage} alt={parkName}/><br/>
          <div className="textGrid">
              <span>Description</span>
              <span>Fee</span>
              <p>{parkDescription}</p>
              <p>{parkFee}</p>
              <br/>
          </div>
  
        </div> */}
        {/*   
        <div id ="explore">
        </div>
        <br/> */}
  
        <div id="map"><MyMap/></div> 
      </>
    )
}

export default ParkLearnMoreDetail;