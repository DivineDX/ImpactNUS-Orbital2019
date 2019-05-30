import React from 'react';
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav class="black flex bb bg-red">
            <a id = "Logo" class="link no-underline flex items-center pa2 br" href="#0">
            DIAGNUS
            </a>
            <div class = "flex items-center pa3 fw9">
                <a class="link dib dim mr3 mr4-ns" href="#0">Petitions</a>
                <a class="link dib dim mr3 mr4-ns" href="#0">Campaigns</a>
            </div>
            <div class="wrap">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="Search"/>
                    <button type="submit" class="searchButton">
                        <img id="SearchButton" src="https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-square/512/Button_15-512.png" alr="search button"/>
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <div class="flex-grow pa3 flex items-center ml7">
                <a id= "Login" class="dib bg-animate hover-bg-orange no-underline pv2 ph4 br-pill ba" href="#0">Login</a>
            </div>
        </nav>
    );
}

export default NavBar;