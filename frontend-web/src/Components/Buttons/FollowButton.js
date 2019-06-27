import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

class FollowButton extends Component {
    state = {}
    handleClick = () => this.setState(prevState => ({ active: !prevState.active }))

    render() {
        const { active } = this.state

        return (
            <Button icon toggle active={active} onClick={this.handleClick}>
                <Icon name='rss' />
                Follow
            </Button>
        );
    }
}

export default FollowButton
