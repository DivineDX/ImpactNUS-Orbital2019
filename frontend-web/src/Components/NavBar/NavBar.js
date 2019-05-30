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
            <div class="flex-grow pa3 flex items-center ml7">
                <a class="dib bg-animate hover-bg-orange no-underline pv2 ph4 br-pill ba" href="#0">Log In</a>
            </div>
        </nav>
    );
}

export default NavBar;