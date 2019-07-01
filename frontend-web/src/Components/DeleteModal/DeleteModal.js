import React, {Component} from 'react';
import { Button, Dropdown, Modal } from 'semantic-ui-react'

class DeleteModal extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
        }
    }

    clickDelete = () => { //modify this after database is coded
        fetch('http://localhost:3001/delete', {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                id: Number(this.props.id),
                organizerID: this.props.userID,
            })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data === 'Success') {
                    this.setState({clicked: true});
                }
            })
    }

    render() {
        const { type } = this.props;
        return (
            <Modal trigger={
                <Dropdown.Item className='hoverLink'>
                    {type === 'petition'
                        ? "Delete Petition"
                        : "Delete Campaign"}
                </Dropdown.Item>
            }>
                <Modal.Header className='tc'> Delete {type} </Modal.Header>
                <Modal.Content>
                    <p> Are you sure you want to delete your {type}? This action is irreversible</p>
                    <Button negative onClick={() => this.clickDelete()} content='End' />
                    {this.state.clicked 
                        ? <h3>Your {type} has been deleted. Click out of this modal to exit</h3>
                        : <div></div>
                    }
                </Modal.Content>
            </Modal>
        );
    }

}


export default DeleteModal;