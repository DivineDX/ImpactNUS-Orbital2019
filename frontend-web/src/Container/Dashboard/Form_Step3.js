import React from 'react';
import { Button, TextArea, Form, Dropdown, Input } from 'semantic-ui-react'
import tagOptions from './tagOptions';
import { Data } from '../../Data/Data'

const fakeData = Data[0];


const Form_Step3 = ({ navButton, inputChange, dropdownChange, currState }) => {
    return (
        <Form size='huge'>
            <Form.Field>
                <h1>Provide a detailed description of your {currState.type}</h1>
                <TextArea focus placeholder = {fakeData.description} onChange={(event) => inputChange(event, 'description')} style={{ minHeight: 200 }} />
            </Form.Field>

            <Form.Field>
                <h1>Add a photo (Optional but highly recommended)</h1>
                <Input focus placeholder = {fakeData.image} onChange={(event) => inputChange(event, 'imageURL')}/>
            </Form.Field>

            <Form.Field>
                <h1>Input relevant tags</h1>
                <Dropdown 
                    clearable fluid multiple search selection
                    value = {currState.tags} 
                    options={tagOptions} 
                    onChange={dropdownChange.bind(this)}
                    placeholder='Insert tags'/>
            </Form.Field>

            <Button.Group>
                <Button labelPosition='left' icon='left chevron' onClick={() => navButton(2)} content='Previous' />
                <Button 
                    disabled = {currState.description === ''}
                    labelPosition='right' icon='right chevron' onClick={() => navButton(4)} content='Next' />
            </Button.Group>
        </Form>
    );
}

export default Form_Step3;