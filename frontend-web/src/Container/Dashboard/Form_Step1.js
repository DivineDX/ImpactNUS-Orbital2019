import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react'
import { Data } from '../../Data/Data'
import "./Form.css";

const fakeData = Data[0];

class Form_Step1 extends Component {
    constructor() {
		super() 
		this.state = {
			Data: Data,
		}
	}
    render() {
        const {navButton, toggleType, inputChange, currState} = this.props; 

        return (
            <Form size='huge'>
                <Form.Field>
                    <h1></h1>
                    <Button.Group size='massive'>
                        <Button toggle active={currState.type === 'petition'} onClick={() => toggleType('petition')}>Petition</Button>
                        <Button.Or />
                        <Button toggle active={currState.type === 'campaign'} onClick={() => toggleType('campaign')}>Campaign</Button>
                    </Button.Group>
                </Form.Field>
    
                <Form.Field>
                    <h1>State the title of your petition/campaign</h1>
                    <h3 className = 'text'> {fakeData.title}</h3>
                    <h6> Note: Title cannot be changed </h6>                
                </Form.Field>
                <Button disabled = {currState.type === '' || currState.title === ''} labelPosition='right' icon='right chevron' onClick={() => navButton(2)} content='Next' />
            </Form>
        );
    }
}


export default Form_Step1;