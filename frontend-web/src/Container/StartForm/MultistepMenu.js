import React, { Component } from 'react';
import { Icon, Step } from 'semantic-ui-react'

export default class MultistepMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step1Completed: false,
            step2Completed: false,
            step3Completed: false,
        }
    }

    markCompleted = (stepNumber) => {
        if(stepNumber === 1){
            this.setState({step1Completed: true});
        } else if(stepNumber === 2){
            this.setState({step2Completed: true});
        } else if (stepNumber === 3){
            this.setState({step3Completed: true});
        }
    }
    
    render() {
        return (
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