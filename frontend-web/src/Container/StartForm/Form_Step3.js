import React from 'react';
import { Button, TextArea, Form } from 'semantic-ui-react'

const Form_Step3 = () => {
    return (
        <Form size='huge'>
                <Form.Field>
                    <h1>Provide a detailed description of your petition</h1>
                    <TextArea style={{ minHeight: 200 }} />
                </Form.Field>

                <Form.Field>
                    <h1>Add a photo</h1>
                    <input min="0" type="number" placeholder = "Link to an image hosting site"/>

                </Form.Field>

                <Button type='submit'>Next</Button>
            </Form>
    );
}

export default Form_Step3;