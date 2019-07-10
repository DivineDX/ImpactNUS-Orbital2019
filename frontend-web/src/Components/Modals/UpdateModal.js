import React, { Component } from 'react';
import { Dropdown, Modal, Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class UpdateModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updateTitle: '',
            updateContent: '',
            updated: false,
        }
    }

    submitUpdate = () => { //modify this after database is coded
        fetch('http://localhost:3001/postupdate', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                id: Number(this.props.id),
                updateTitle: this.state.updateTitle,
                updateContent: this.state.updateContent,
                organizerID: this.props.userID,
            })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data === 'Success') {
                    this.setState({ updated: true });
                }
            })
    }

    onInputChange = (event, category) => {
        // console.log("input Change", category);
        switch (category) {
            case "title":
                this.setState({ updateTitle: event.target.value }); //petition or campaign 
                break;
            case "content":
                this.setState({ updateContent: event.target.value }); //petition or campaign 
                break;
            default:
                break;
        }
    }

    render() {
        const { buttonWord } = this.props;
        return (
            <Modal trigger={<Dropdown.Item className='hoverLink'>{buttonWord}</Dropdown.Item>}>
                <Modal.Header className='tc'> Post Update </Modal.Header>
                <Modal.Content>
                    <Form size='huge'>
                        <Form.Field>
                            <h3>Title</h3>
                            <input type='text' placeholder='Title your update' onChange={(event) => this.onInputChange(event, 'title')} />
                        </Form.Field>
                        <Form.Field>
                            <h3>Description of Update</h3>
                            <textarea placeholder="Updates"
                                onChange={(event) => this.onInputChange(event, 'content')} style={{ minHeight: 200 }} />
                        </Form.Field>
                        <Link to="/dashboard">
                            <Button disabled={this.state.updated} onClick={() => this.submitUpdate()} labelPosition='right' icon='right chevron' content='Update' />
                        </Link>
                        {   this.state.updated
                            ?  <h3>Update posted! Click anywhere out of the modal to exit</h3>
                            : <div></div>
                        }
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }
}

export default UpdateModal;