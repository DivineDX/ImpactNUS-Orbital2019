import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import "./Footer.css";

class Footer extends Component {
  state = { activeItem: '1' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu borderless className="alignment">
        <Menu.Item name='About' active={activeItem === 'About'} onClick={this.handleItemClick}>
            <Link to="/about">
                <span className="link dib dim mr3 mr4-ns">About</span>
            </Link> 
        </Menu.Item>
        <Menu.Item name='How it Works' active={activeItem === 'How it Works'} onClick={this.handleItemClick}>
            <Link to="/howitworks">
                <span className="link dib dim mr3 mr4-ns">How It Works</span>
            </Link> 
        </Menu.Item>
        <Menu.Item name='GitHubb' active={activeItem === 'GitHubb'} onClick={this.handleItemClick}>
            <Link to="/githubb">
                <span className="link dib dim mr3 mr4-ns">GitHub</span>
            </Link>
        </Menu.Item>
        <Menu.Item name='FAQ' active={activeItem === 'FAQ'} onClick={this.handleItemClick}>
            <Link to="/faq">
                <span className="link dib dim mr3 mr4-ns">FAQ</span>
            </Link>
        </Menu.Item>
        <Menu.Item name='Contact Us' active={activeItem === 'Contact Us'} onClick={this.handleItemClick}>
            <Link to="/contactus">
                <span className="link dib dim mr3 mr4-ns">Contact Us</span>
            </Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Footer;