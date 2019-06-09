import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const adminLogin = [ //for testing login. Delete after database is coded
	{
        nusID: 'admin',
        password: '123',
    }, {
        nusID: 'dx',
        password: 'xd123',
    }
];

class LoginForm extends React.Component {
    constructor(props) { //takes in loginProp
        super(props);
        this.state = {
            nusID: '',
            password: '',
        }
    }

    onEmailChange = (event) => { 
        this.setState({ nusID: event.target.value });
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    onSignIn = () => { //modify this after database is coded
        for (let user of adminLogin) {
            if(user.nusID === this.state.nusID && user.password === this.state.password){
                this.props.loginProp(this.state.nusID);
                break;
            }
        }
    }

    render() {
        return (
            <Form>
                <Form.Field>
                    <input placeholder='NUS UserID' onChange = {this.onEmailChange}/>
                </Form.Field>
                <Form.Field>
                    <input placeholder='Password' type="password" onChange = {this.onPasswordChange}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Keep me signed in' />
                </Form.Field>
                <Button type='submit' onClick={() => this.onSignIn()} >Sign In</Button>
            </Form>

        );
    }

}

export default LoginForm;