import React, { Component } from 'react';
import { Button, Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

//old modal: <LoginModal loginProp={loginProp} buttonWord={"Login"} /> //loginUser function
class NavBar extends Component {
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    constructor() {
        super()
        this.state = {
            activeItem: 'DiagNus',
        }
    }

    onSearchChange(event) {
        console.log(event);
    }

    render() {
        const { activeItem } = this.state
        const { loginProp, isSignedIn, name } = this.props

        return (
            <Menu borderless id="Navbar">
                <Button id='Diagnus'>
                    <Link to="/" className="link no-underline flex items-center pa2">
                        <div id="Logo">
                            ImpactNUS
                        </div>
                    </Link>
                </Button>

                <div className=" dib flex items-left ">
                    <Menu id='HeaderWord'>
                        <Menu.Item>
                            <Button className='HeaderBut' name='Bulletin' active={activeItem === 'Bulletin'} onClick={this.handleItemClick}>
                                <Link to="/bulletin">
                                    <div className="link dib dim mr0 mr1-ns" id='BulletinFS'>Bulletin</div>
                                </Link>
                            </Button>
                        </Menu.Item>

                        <Menu.Item>
                            <Button className='HeaderBut' name='My Dashboard' active={activeItem === 'My Dashboard'} onClick={this.handleItemClick}>
                                <Link to="/dashboard">
                                    <div className="link dib dim mr0 mr1-ns" id='BulletinFS'>Dashboard</div>
                                </Link>
                            </Button>
                        </Menu.Item>
                    </Menu>

                    <Menu.Menu position='right' id='right'>
                        {/* <SearchBar searchChange={this.onSearchChange} className='search' /> */}              
                        <Menu.Item id='SignInOut'>
                            <div>
                            {isSignedIn
                                ? <i className = 'underline'>Logged in as {name}</i>
                                : null
                            }

                                {isSignedIn === false //conditional
                                    ? <Link to="/login">
                                        <Button>Login</Button>
                                    </Link>
                                    : <Link to="/">
                                        <Button id='LoginButSize' onClick={() => loginProp()}>Sign Out</Button>
                                    </Link>
                                }
                            </div>
                        </Menu.Item>
                    </Menu.Menu>
                </div>
            </Menu>
        )
    }
}

export default NavBar;