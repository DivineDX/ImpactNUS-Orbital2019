import React from 'react';
import { Button, Checkbox, Form, TextArea } from 'semantic-ui-react';

class LoginForm extends React.Component {
    constructor(props) { //takes in loginProp
        super(props);
        this.state = {
            id: '',
            title: '',
            update: '',
        }
    }

    onUpdate = () => { //modify this after database is coded
        fetch('http://localhost:3001/update', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                id: this.state.id,
                title: this.state.title,
                update: this.state.update,

            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.success) {
                this.props.updateProp(this.state.id);
            }
        })
    }

    onUpdate = (event) => { 
        this.setState({ title: event.target.value });
    }

    render() {
        return (
            <Form size='huge'>
                <Form.Field>
                    {/* <text placeholder= {title}/> */}
                </Form.Field>
                <Form.Field>
                    <h1> Update </h1>
                    <TextArea>
                        {/* // focus value = {currState.description}  */}
                        <input placeholder='Update' onChange = {this.onUpdate}/>
                    </TextArea>
                </Form.Field>
                <Button labelPosition='right' icon='right chevron' content='Update' />
            </Form>
        );
    }

}

export default LoginForm;