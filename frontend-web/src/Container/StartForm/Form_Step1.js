import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

class Form_Step1 extends Component {
    render() {
        const {navButton, toggleType, inputChange, currType} = this.props;
        return (
            <Form size='huge'>
                <Form.Field>
                    <h1>State your option</h1>
                    <Button.Group size='massive'>
                        <Button toggle active={currType === 'petition'} onClick={() => toggleType('petition')}>Petition</Button>
                        <Button.Or />
                        <Button toggle active={currType === 'campaign'} onClick={() => toggleType('campaign')}>Campaign</Button>
                    </Button.Group>
                </Form.Field>
    
                <Form.Field>
                    <h1>State the title of your petition/campaign</h1>
                    <input onChange={(event) => inputChange(event, 'title')} placeholder='Use a simple and concise title that can effectively convey your message' />
                </Form.Field>
    
                <Button labelPosition='right' icon='right chevron' onClick={() => navButton(2)} content='Next' />
            </Form>
        );
    }
}


export default Form_Step1;