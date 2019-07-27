import React, { Component } from 'react';
import { Button, Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import SearchBar from "../../Components/SearchBar/SearchBar";

//old modal: <LoginModal loginProp={loginProp} buttonWord={"Login"} /> //loginUser function
class NavBar extends Component {
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    constructor() {
        super()
        this.state = {
            activeItem: 'DiagNus',
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
            <Menu borderless id="Navbar">
                <Button id='Diagnus'>
                    <Link to="/" className="link no-underline flex items-center pa2">
                        <div id="Logo">
                            DIAGNUS
                        </div>
                    </Link>
                </Button>

                <div className=" dib flex items-center pa9 fw9">
                    <div id='HeaderWord'>
                        <Button name='Bulletin' active={activeItem === 'Bulletin'} onClick={this.handleItemClick}>
                            <Link to="/bulletin">
                                <div className="link dib dim mr0 mr1-ns">Bulletin</div>
                            </Link>
                        </Button>

                        <Button name='My Feed' active={activeItem === 'My Feed'} onClick={this.handleItemClick}>
                            <Link to="/feed">
                                <div className="link dib dim mr0 mr1-ns">Feed</div>
                            </Link>
                        </Button>

                        <Button name='My Dashboard' active={activeItem === 'My Dashboard'} onClick={this.handleItemClick}>
                            <Link to="/dashboard">
                                <div className="link dib dim mr0 mr1-ns">Dashboard</div>
                            </Link>
                        </Button>
                    </div>
                    
                    
                    <Menu.Menu position='right' id='right'>
                        {/* <SearchBar searchChange={this.onSearchChange} className='search' /> */}
                        <Menu.Item id='SignInOut'>
                            <div>
                                {isSignedIn === false //conditional
                                    ? <Link to="/login">
                                        <Button>Login</Button>
                                    </Link>
                                    : <Link to="/">
                                        <Button id='LoginButSize'onClick={() => loginProp()}>Sign Out</Button> 
                                    </Link>
                                }
                            </div>
                        </Menu.Item>
                    </Menu.Menu>
                </div>
                <Dropdown id='MobileView' icon='align justify' floating labeled button >
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Button className='HeaderBut' name='Bulletin' active={activeItem === 'Bulletin'} onClick={this.handleItemClick}>
                                    <Link to="/bulletin">
                                        <div className="link dib dim mr0 mr1-ns">Bulletin</div>
                                    </Link>
                                </Button>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Button className='HeaderBut' name='My Feed' active={activeItem === 'My Feed'} onClick={this.handleItemClick}>
                                    <Link to="/feed">
                                        <div className="link dib dim mr0 mr1-ns">Feed</div>
                                    </Link>
                                </Button>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Button className='HeaderBut' name='My Dashboard' active={activeItem === 'My Dashboard'} onClick={this.handleItemClick}>
                                    <Link to="/dashboard">
                                        <div className="link dib dim mr0 mr1-ns">Dashboard</div>
                                    </Link>
                                </Button>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
            </Menu>
        )
    }
}

export default NavBar;