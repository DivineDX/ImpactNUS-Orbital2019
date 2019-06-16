import React, { Component } from 'react';
import { Button, Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

class NavBar extends Component {
  state = { activeItem: 'DiagNus' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <Menu stackable>
        <Menu.Item>
            <Link to="/" className="link no-underline flex items-center pa2 br">
                <div id="Logo">
                    DIAGNUS
                </div>
            </Link>
        </Menu.Item>
        <Menu.Item
          name='Bulletin'
          active={activeItem === 'Bulletin'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='My Feed'
          active={activeItem === 'My Feed'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='My Dashboard'
          active={activeItem === 'My Dashboard'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
            <Menu.Item position='right'>
                <Input action={{ type: 'submit', content: 'Go' }} placeholder='Search...' />
            </Menu.Item>
          <Menu.Item>
            <Button secondary> Login </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar;