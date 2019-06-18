import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

class Form_Step2 extends Component {
    render() {
        const target_Petition = "Select a decision maker";
        const petition_Placehoder = "This is the organization/person who is able to respond to your petiton"
        return (
            <Form size='huge'>
                <Form.Field>
                    <h1>{target_Petition}</h1>
                    <input placeholder={petition_Placehoder} />
                </Form.Field>

                <Form.Field>
                    <h1>State your target number of supporters</h1>
                    <input min="0" type="number" placeholder = "Target Number"/>

                </Form.Field>
                <Form.Field>
                    <Checkbox label='Enable organizer anonymity' />
                </Form.Field>

                <Button type='submit'>Next</Button>
            </Form>
        );
    }
}

export default Form_Step2;