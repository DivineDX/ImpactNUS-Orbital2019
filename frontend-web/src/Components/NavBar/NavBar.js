import React from 'react';
import "./NavBar.css";
import LoginModal from "../LoginModal/LoginModal";
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const NavBar = ({ loginProp, isSignedIn }) => {
    return (
        <div className="bb menu">
            <Link to="/" className="link no-underline flex items-center pa2 br">
                <div id="Logo">
                    DIAGNUS
                </div>
            </Link>
            <div className="flex items-center pa3 fw9">
                <Link to="/bulletin">
                    <div className="link dib dim mr3 mr4-ns">Bulletin</div>
                </Link>
                <Link to="/feed">
                    <div className="link dib dim mr3 mr4-ns">My Feed</div>
                </Link>
                <Link to="/dashboard">
                    <div className="link dib dim mr3 mr4-ns">My Dashboard</div>
                </Link>

            </div>
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Search" />
                    <button type="submit" className="searchButton">
                        <img id="SearchButton" src="https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-square/512/Button_15-512.png" alt="search button" />
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <div className="flex-grow pa3 flex items-center ml7">
                <div id="Login">
                    {isSignedIn === false //conditional
                        ? <LoginModal loginProp={loginProp} buttonWord={"Login"} /> //loginUser function
                        : <Button onClick={() => loginProp()}>Sign Out</Button> //onClick, will run the signOutUser as defined in App.js
                    }
                </div>

            </div>
        </div>
    );
}

export default NavBar;
