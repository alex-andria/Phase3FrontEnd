import React from "react";
import { Link } from 'react-router-dom';
import Search from './Search'


function Header ({allParksData, setResults}){
   
    return(
        <div className="Header">
            <h1 id='appTitle'>National Parks</h1>
            <Search setResults = {setResults} allParksData ={allParksData}/>
            <div className="pageLinks">
                <Link id="homeButton" to='/'><button id="homeButton">Home</button></Link>
                {/* <Link id='viewListsButton' to='/listpage'><button id='viewListsButton'>View Lists</button></Link> */}
                {/* <Link id='photoGallery' to='/gallery'><button id='photoGallery'>Photo Gallery</button></Link> */}
                <Link id='browsepage' to='/browsepage'><button id='browsePage' onClick={(e) => {setResults(allParksData)}}>Browse Parks</button></Link>
            
            </div>   
    
        </div>
    );
}

export default Header;
