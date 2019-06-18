import React from 'react';
import { Button, Form } from 'semantic-ui-react'

const Form_Step1 = () => {
    return (
        <Form size = 'huge'>
            <Form.Field>
                <h1>State your option</h1>
                <Button.Group size = 'big'> 
                        {/* Button size should be bigger, but it is buggy - does not fit to frame:(*/}
                        <Button color = 'orange'>Petition</Button>
                        <Button.Or/>
                        <Button color = 'green'>Campaign</Button>
                </Button.Group>
            </Form.Field>

            <Form.Field>
                <h1>State the title of your petition/campaign</h1>
                <input placeholder='Use a simple and concise title that can effectively convey your message' />
            </Form.Field>
            <Button type='submit'>Next</Button>
        </Form>
    );

}

export default Form_Step1;