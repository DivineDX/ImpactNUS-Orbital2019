import React, { Component } from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import Logo from '../../Images/Logo.png'; 

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
                <Link to="/" className="link no-underline flex items-center pl3">
                    <img src={Logo} id='Logo' />
                </Link>

                <div className=" dib flex items-left">
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

                    <Menu.Menu id='NormalD'>
                        {/* <SearchBar searchChange={this.onSearchChange} className='search' /> */}
                        <Menu.Item id='SignInOut'>
                            <div>
                                {isSignedIn
                                    ? <i className='underline LogInText'>Logged in as {name}</i>
                                    : null
                                }

                                {isSignedIn === false //conditional
                                    ? <Link to="/login">
                                        <Button className="SIObut">Login</Button>
                                    </Link>
                                    : <Link to="/">
                                        <Button className="SIObut" onClick={() => loginProp()}>Sign Out</Button>
                                    </Link>
                                }
                            </div>
                        </Menu.Item>
                    </Menu.Menu>

                    <Menu.Menu id='SmallerD'>
                        {/* <SearchBar searchChange={this.onSearchChange} className='search' /> */}
                        <Menu.Item id='SignInOut'>
                            <div>
                                {isSignedIn === false //conditional
                                    ? <Link to="/login">
                                        <Button className="SIObut">Login</Button>
                                    </Link>
                                    : <Link to="/">
                                        <Button className="SIObut" onClick={() => loginProp()}>Sign Out</Button>
                                    </Link>
                                }

                                {isSignedIn
                                    ? <i className='underline LogInText'>Logged in as {name}</i>
                                    : null
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