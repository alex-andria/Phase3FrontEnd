import React from "react";
import { Link } from 'react-router-dom';
import Search from './components/search'
//import logo from "../images/crypto-call-logo-2.png"
//import igLogo from "../images/ig-logo.png"
//import twitterLogo from "../images/twitter-logo.png"

function Header (){
   
    return(
        <div className="Header">
            {/* <img id="cryptoCallLogo" src={logo} alt="crypto call logo"/> */}
            <div className="pageLinks">
                <Link id="homeButton" to='/'><button id="homeButton">Home</button></Link>
                <Link><button>View Lists</button></Link>
                <Link><button>Photo Gallery</button></Link>
                {/* Search bar*/}
            </div>   
            <Search />
        </div>
    );
}

export default Header;