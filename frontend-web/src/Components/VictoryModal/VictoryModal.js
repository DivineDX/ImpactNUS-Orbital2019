import React, { Component } from 'react';
import { Button, TextArea, Form, Dropdown, Input, Modal } from 'semantic-ui-react'

class VictoryModal extends Component {
    render() {
        const { buttonWord } = this.props;
        return(
            <Modal trigger={<Button>{buttonWord}</Button>}>
                <Modal.Header className='tc'> Declare Victory </Modal.Header>
                <Modal.Content>
                    <p> Are you sure you want to declare victory? By doing so, you won't be able to gain more supporters </p>
                    <Button positive>
                        Declare
                    </Button>
                </Modal.Content>
            </Modal>
        );
    }
}

export default VictoryModal;