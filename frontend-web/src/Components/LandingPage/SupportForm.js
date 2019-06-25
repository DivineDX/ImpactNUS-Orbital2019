import React from 'react';
import {Checkbox, Form} from 'semantic-ui-react'
import './SupportForm.css';

const SupportForm = () => (
    <Form>
        <Form.Field
            className = 'ph3 mv2'>
            <div>
                <p className = 'f5 fw7'>Describe yourself (Optional)</p>
                <input type = "text" placeholder = "E.g. Freshman residing in RC4"/>
            </div>
        </Form.Field>
        <Form.Field
            className = 'ph3 mv2'>
            <div>
                <p className = 'f5 fw7'>Reason for Support (Optional)</p>
                <textarea placeholder = "Why are you supporting this?"></textarea>
            </div>
        </Form.Field>
        <Form.Field>
            <Checkbox label='Enable anonymity' />
        </Form.Field>
        <button className="landing-button">Submit</button>
    </Form>
);

export default SupportForm;