import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react'

class Form_Step1 extends Component {
    render() {
        const {navButton, toggleType, inputChange, currState, id} = this.props;
        return (
            <Form size='huge'>
                <Form.Field>
                    <h1>State your option</h1>
                    <Button.Group size='massive' >
                        <Button 
                            disabled = {currState.isEditing} 
                            toggle active={currState.type === 'petition'}
                            onClick={() => toggleType('petition')}
                        > 
                            Petition
                        </Button>
                        <Button.Or />
                        <Button disabled = {currState.isEditing} toggle active={currState.type === 'campaign'} onClick={() => toggleType('campaign')}>Campaign</Button>
                    </Button.Group>
                </Form.Field>
    
                <Form.Field>
                    <h1>State the title of your petition/campaign</h1>
                    <Input disabled = {currState.isEditing} value = {currState.title} focus onChange={(event) => inputChange(event, 'title')} placeholder='Use a simple & concise title that will effectively convey your message' />
                </Form.Field>
    
                <Button disabled = {!currState.isEditing && (currState.type === '' || currState.title === '')} labelPosition='right' icon='right chevron' onClick={() => navButton(2)} content='Next' />
            </Form>
        );
    }
}


export default Form_Step1;