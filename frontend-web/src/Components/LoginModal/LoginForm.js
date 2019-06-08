import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const LoginForm = () => (
    <Form>
        <Form.Field>
            {/* <label>NUS UserID</label> */}
            <input placeholder='NUS UserID' />
        </Form.Field>
        <Form.Field>
            {/* <label>Last Name</label> */}
            <input placeholder='Password' type = "password"/>
        </Form.Field>
        <Form.Field>
            <Checkbox label='Keep me signed in' />
        </Form.Field>
        <Button type='submit'>Sign In</Button>
    </Form>
);

export default LoginForm;