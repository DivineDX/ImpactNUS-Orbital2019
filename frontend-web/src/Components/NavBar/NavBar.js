import React, { Component } from 'react';
import { Button, Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import LoginModal from "../LoginModal/LoginModal";

class NavBar extends Component {
  state = { activeItem: 'DiagNus' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const {loginProp, isSignedIn} = this.props

    return (
    <Menu borderless stackable>
        <Menu.Item>
            <Link to="/" className="link no-underline flex items-center pa2 br">
                <div id="Logo">
                    DIAGNUS
                </div>
            </Link>
        </Menu.Item>
        <div className=" dib flex items-center pa9 fw9 headerWord">
        <Menu.Item name='Bulletin' active={activeItem === 'Bulletin'} onClick={this.handleItemClick}>
            <Link to="/bulletin">
                    <div className="link dib dim mr3 mr4-ns">Bulletin</div>
            </Link>
        </Menu.Item>
        <Menu.Item name='My Feed' active={activeItem === 'My Feed'} onClick={this.handleItemClick}>
            <Link to="/feed">
                    <div className="link dib dim mr3 mr4-ns">Feed</div>
            </Link>
        </Menu.Item>
        <Menu.Item name='My Dashboard' active={activeItem === 'My Dashboard'} onClick={this.handleItemClick}>
            <Link to="/dashboard">
                    <div className="link dib dim mr3 mr4-ns">Dashboard</div>
            </Link>
        </Menu.Item>
        </div>
        <Menu.Menu position='right' className='alignment'>
            <Menu.Item>
                <Input action={{ type: 'submit', content: 'Go' }} placeholder='Search...'/> 
            </Menu.Item>
          <Menu.Item>
            <div>
              {isSignedIn === false //conditional
                ? <LoginModal loginProp={loginProp} buttonWord={"Login"} /> //loginUser function
                : <Button onClick={() => loginProp()}>Login</Button> //onClick, will run the signOutUser as defined in App.js
                }
            </div>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar;