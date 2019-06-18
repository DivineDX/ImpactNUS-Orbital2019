import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default class MultistepMenu extends Component {
    state = {}

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
    }

    render() {
        const { activeItem } = this.state

        return (
            <Menu compact icon='labeled'>
                <Menu.Item
                    name='1' //Choose petition or campaign, select title
                    active={activeItem === '1'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='pencil alternate'/>
                    STATE
                </Menu.Item>

                <Menu.Item
                    name='2'
                    active={activeItem === '2'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='tasks' />
                    SPECIFY
                </Menu.Item>

                <Menu.Item
                    name='3' //Description & Image
                    active={activeItem === '3'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='keyboard' />
                    DESCRIBE
                </Menu.Item>
            </Menu>
        )
    }
}