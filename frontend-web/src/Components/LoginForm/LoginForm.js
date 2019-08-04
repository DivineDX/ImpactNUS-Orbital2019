import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

class LoginForm extends React.Component {
    constructor(props) {
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
        fetch('http://fathomless-ocean-65423.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                id: this.state.nusID,
                password: this.state.password,
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if(data === 'Failed login') {
                throw new Error("Incorrect User/PW");
            } else {
                this.props.loginUser(this.state.nusID);
                this.props.history.push("/");
            }
        }).catch(err => {
            alert(err);
        })
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