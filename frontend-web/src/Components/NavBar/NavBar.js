import React, { Component } from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import LoginModal from "../LoginModal/LoginModal";
import SearchBar from "./SearchBar";
import { data } from "./data";

class NavBar extends Component {
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    constructor() {
        super()
        this.state = {
            activeItem: 'DiagNus',
            data: data, // --> will get the data from there
            searchfield: ''
        }
    }

    onSearchChange(event) {
        console.log(event);
    }

    render() {
        const { activeItem } = this.state
        const { loginProp, isSignedIn } = this.props

        return (
            <Menu borderless id="navbar">
                <Menu.Item className="br b--blue">
                    <Link to="/" className="link no-underline flex items-center pa2">
                        <div id="Logo">
                            DIAGNUS
                        </div>
                    </Link>
                </Menu.Item>

                <div className=" dib flex items-center pa9 fw9">
                    <div className='headerWord'>
                        <Menu.Item name='Bulletin' active={activeItem === 'Bulletin'} onClick={this.handleItemClick}>
                            <Link to="/bulletin">
                                <div className="link dib dim mr0 mr1-ns">Bulletin</div>
                            </Link>
                        </Menu.Item>

                        <Menu.Item name='My Feed' active={activeItem === 'My Feed'} onClick={this.handleItemClick}>
                            <Link to="/feed">
                                <div className="link dib dim mr0 mr1-ns">Feed</div>
                            </Link>
                        </Menu.Item>
                        
                        <Menu.Item name='My Dashbard' active={activeItem === 'My Dashboard'} onClick={this.handleItemClick}>
                            <Link to="/dashboard">
                                <div className="link dib dim mr0 mr1-ns">Dashboard</div>
                            </Link>
                        </Menu.Item>
                    </div>
                </div>

                <Menu.Menu position='right' className='right'>
                    <SearchBar searchChange={this.onSearchChange} className='search'/>
                    <Menu.Item>
                        <div>
                            {isSignedIn === false //conditional
                                ? <LoginModal loginProp={loginProp} buttonWord={"Login"} /> //loginUser function
                                : <Button onClick={() => loginProp()}>Sign Out</Button> //onClick, will run the signOutUser as defined in App.js
                            }
                        </div>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default NavBar;