import React from 'react';
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className = "bb">
            <a id = "Logo" className="link no-underline flex items-center pa2 br" href="#0">
                DIAGNUS
            </a>
            <div className = "flex items-center pa3 fw9">
                <a className="link dib dim mr3 mr4-ns" href="#0">Bulletin</a>
                <a className="link dib dim mr3 mr4-ns" href="#0">My Feed</a>
                <a className="link dib dim mr3 mr4-ns" href="#0">My Dashboard</a>
            </div>
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Search"/>
                    <button type="submit" className="searchButton">
                        <img id="SearchButton" src="https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-square/512/Button_15-512.png" alt="search button"/>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <div className="flex-grow pa3 flex items-center ml7">
                <a id= "Login" className="dib bg-animate hover-bg-orange no-underline pv2 ph4 br-pill ba" href="#0">Login</a>
            </div>
        </nav>
    );
}

export default NavBar;
