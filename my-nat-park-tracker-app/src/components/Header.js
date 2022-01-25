import React from "react";
import { Link } from 'react-router-dom';
import Search from './Search'


function Header (){
   
    return(
        <div className="Header">
            <h1 id='appTitle'>National Parks</h1>
            <div className="pageLinks">
                <Link id="homeButton" to='/'><button id="homeButton">Home</button></Link>
                <Link id='viewListsButton' to='/listpage'><button id='viewListsButton'>View Lists</button></Link>
                <Link id='photoGallery' to='/gallery'><button id='photoGallery'>Photo Gallery</button></Link>
            </div>   
            <Search />
        </div>
    );
}

export default Header;