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
        switch (stepNumber) {
            case 1:
                this.setState({ step1Completed: true });
                break;
            case 2:
                this.setState({ step2Completed: true });
                break;
            case 3:
                this.setState({ step3Completed: true });
                break;
            default:
                break;
        }
    }

    render() {
        const {currentStep} = this.props;
        return (
            <Step.Group unstackable>
                <Step active = {currentStep === 1} className='stepTitle'>
                    <Icon name='pencil alternate' />
                    <Step.Content>
                        <Step.Title >State</Step.Title>
                    </Step.Content>
                </Step>
                <Step active = {currentStep === 2} className='stepTitle'>
                    <Icon name='tasks' />
                    <Step.Content>
                        <Step.Title>Specify</Step.Title>
                    </Step.Content>
                </Step>
                <Step active = {currentStep === 3} className='stepTitle'>
                    <Icon name='keyboard' />
                    <Step.Content>
                        <Step.Title>Describe</Step.Title>
                    </Step.Content>
                </Step>
                <Step active = {currentStep === 4} className='stepTitle'>
                    <Icon name='upload' />
                    <Step.Content>
                        <Step.Title>Preview</Step.Title>
                    </Step.Content>
                </Step>
            </Step.Group>
        );
    }
}