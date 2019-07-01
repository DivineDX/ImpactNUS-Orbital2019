import React, { Component } from 'react';
import { Checkbox, Form } from 'semantic-ui-react'
import './SupportForm.css';

class SupportForm extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            userID: '',
            username: '',
            alreadySigned: false,
            description: '',
            reason: '',
            anonymity: false,
        }
    }

    componentDidMount() {
        this.setState({ 
            username: this.props.username,
            userID: this.props.userID,
            id: this.props.id 
        });

        fetch('http://localhost:3001/checkifsigned', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                id: Number(this.props.id),// petition/campaign id
                userID: this.props.userID,
            })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data) { //already signed
                    this.setState({ alreadySigned: true });
                }
            })
    }

    toggleAnonymity = () => {
        // console.log("toggling");
        if (this.state.anonymity) { //true
            this.setState({ anonymity: false });
        } else {
            this.setState({ anonymity: true });
        }
    }

    onInputChange = (event, category) => {
        // console.log("input Change", event.target.value);
        switch (category) {
            case "description":
                this.setState({ description: event.target.value }); //petition or campaign 
                break;
            case "reason":
                this.setState({ reason: event.target.value }); //petition or campaign 
                break;
            default:
                break;
        }
    }

    onSubmitClick = () => { //modify this after database is coded
        console.log("Submit", this.state);
        fetch('http://localhost:3001/signsupport', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                id: Number(this.state.id),
                username: this.state.username,
                userID: this.state.userID,
                description: this.state.description,
                reason: this.state.reason,
                anonymity: this.state.anonymity,
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if(data === 'Success'){
                this.setState({alreadySigned: true});
                this.props.refresh();
            }                
        })
    }

    render() {
        return (
            <Form>
                <Form.Field
                    className='ph3 mv2'>
                    <div>
                        <p className='f5 fw7'>Describe yourself (Optional)</p>
                        <input type="text" placeholder="E.g. Freshman residing in RC4" onChange={(event) => this.onInputChange(event, 'description')} />
                    </div>
                </Form.Field>
                <Form.Field
                    className='ph3 mv2'>
                    <div>
                        <p className='f5 fw7'>Reason for Support (Optional)</p>
                        <textarea onChange={(event) => this.onInputChange(event, 'reason')} placeholder="Why are you supporting this?"></textarea>
                    </div>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Enable anonymity' onClick={() => this.toggleAnonymity()} />
                </Form.Field>
                <button className="landing-button" disabled = {this.state.alreadySigned || this.state.userID === ''} onClick={() => this.onSubmitClick()}>Submit</button>
            </Form>
        );
    }
}

export default SupportForm;