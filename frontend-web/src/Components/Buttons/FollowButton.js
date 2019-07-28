import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import "./FollowButton.css";

class FollowButton extends Component {
    state = {}
    handleClick = () => this.setState(prevState => ({ active: !prevState.active }))

    render() {
        const { active } = this.state

        return (
            <Button icon toggle active={active} onClick={this.handleClick} float id='FollowBut'>
                <Icon name='rss' />
                <p float id='FollowText'> Follow </p>
            </Button>
        );
    }
}

export default FollowButton
