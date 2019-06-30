import React, { Component } from 'react';
import { Dropdown, Modal, Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class UpdateModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updateTitle: '',
            updateDescription: '',
        }
    }
    
    onUpdate = () => { //modify this after database is coded
        fetch('http://localhost:3001/update', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                updateTitle: this.state.updateTitle,
                updateDescription: this.state.updateDescription,
            })
        })
        .then(resp => resp.json())
        .then(data => {
            // this.resetDefault();
            this.setState({updating: true});
            console.log(data); //Object Data of the created petition/campaign
    })
    }

    onInputChange = (event, category) => {
        // console.log("input Change", category);
        switch (category) {
            case "updateTitle":
                this.setState({ updateTitle: event.target.value }); //petition or campaign 
                break;
            case "description":
                this.setState({ updateDescription: event.target.value }); //petition or campaign 
                break;
        }
    }

    render() {
        const { currState, buttonWord, title } = this.props;

        return (
            <Modal trigger={<Dropdown.Item className = 'hoverLink'>{buttonWord}</Dropdown.Item>}>
                <Modal.Header className='tc'> Post Update </Modal.Header>
                <Modal.Content>
                    <Form size='huge'>
                        <Form.Field>
                            <h1> Title {title} </h1>
                            <input type = 'text' placeholder = 'Title your update' onChange={(event) => this.onInputChange(event, 'updateTitle')}/>
                        </Form.Field>
                        <Form.Field>
                            <h1> Update </h1>
                            <textarea placeholder = "Updates" 
                            onChange={(event) => this.onInputChange(event, 'updateDescription')} style={{ minHeight: 200 }} />
                        </Form.Field>
                        <Link to="/">
                            <Button labelPosition='right' icon='right chevron' content='Update'/>
                        </Link>
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }
}

export default UpdateModal;