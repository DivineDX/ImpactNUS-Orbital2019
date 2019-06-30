import React, { Component } from 'react';
import { Dropdown, Modal } from 'semantic-ui-react'
import UpdateForm from './UpdateForm.js'

class UpdateModal extends Component {
    render() {
        const { inputChange, currState, buttonWord, title } = this.props;

        return (
            <Modal trigger={<Dropdown.Item className = 'hoverLink'>{buttonWord}</Dropdown.Item>}>
                <Modal.Header className='tc'> Post Update </Modal.Header>
                <Modal.Content>
                    <UpdateForm />
                </Modal.Content>
            </Modal>
        );
    }
}

export default UpdateModal;