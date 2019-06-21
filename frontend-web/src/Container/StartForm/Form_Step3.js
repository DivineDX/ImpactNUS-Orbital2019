import React from 'react';
import { Button, TextArea, Form, Dropdown } from 'semantic-ui-react'

const tagOptions = [
    {key: 'ac', value: 'ac', text: 'Academic'},
    {key: 'cip', value: 'cip', text: 'CIP'},
    {key: 'sl', value: 'sl', text: 'Student Life'},
    {key: 'cl', value: 'cl', text: 'Campus Living'},
];

const Form_Step3 = ({ navButton, inputChange, currType }) => {
    return (
        <Form size='huge'>
            <Form.Field>
                <h1>Provide a detailed description of your {currType}</h1>
                <TextArea onChange={(event) => inputChange(event, 'description')} style={{ minHeight: 200 }} />
            </Form.Field>

            <Form.Field>
                <h1>Add a photo</h1>
                <input onChange={(event) => inputChange(event, 'imageURL')} placeholder="Link to an image hosting site" />
            </Form.Field>

            <Form.Field>
                <h1>Input relevant tags</h1>
                <Dropdown clearable fluid multiple search selection options={tagOptions} placeholder='Insert tags'/>
            </Form.Field>

            <Button.Group>
                <Button labelPosition='left' icon='left chevron' onClick={() => navButton(2)} content='Previous' />
                <Button labelPosition='right' icon='right chevron' onClick={() => navButton(4)} content='Next' />
            </Button.Group>
        </Form>
    );
}

export default Form_Step3;