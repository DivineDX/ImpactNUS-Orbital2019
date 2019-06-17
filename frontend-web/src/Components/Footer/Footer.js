import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import "./Footer.css";

class Footer extends Component {
  state = { activeItem: '1' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu borderless className="alignment">
        <Menu.Item name='About' active={activeItem === 'About'} onClick={this.handleItemClick} />
        <Menu.Item name='How it Works' active={activeItem === 'How it Works'} onClick={this.handleItemClick} />
        <Menu.Item name='GitHub' active={activeItem === 'GitHub'} onClick={this.handleItemClick} />
        <Menu.Item name='FAQ' active={activeItem === 'FAQ'} onClick={this.handleItemClick} />
        <Menu.Item name='Contact Us' active={activeItem === 'Contact Us'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

export default Footer;