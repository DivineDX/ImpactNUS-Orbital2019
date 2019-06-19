import React, { Component } from 'react';
import { Icon, Step } from 'semantic-ui-react'

export default class MultistepMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step1_Completed: '',
            step2_Completed: '',
            step3_Completed: '',
        }
    }
    render() {
        return (
            /*<Menu compact icon='labeled'>
                <Menu.Item
                    name='1'
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
            </Menu> */
            
            <Step.Group >
                <Step active>
                    <Icon name='pencil alternate' />
                    <Step.Content>
                        <Step.Title>State</Step.Title>
                    </Step.Content>
                </Step>
                <Step >
                    <Icon name='tasks' />
                    <Step.Content>
                        <Step.Title>Specify</Step.Title>
                    </Step.Content>
                </Step>
                <Step >
                    <Icon name='keyboard' />
                    <Step.Content>
                        <Step.Title>Describe</Step.Title>
                    </Step.Content>
                </Step>
            </Step.Group>
        );
    }
}