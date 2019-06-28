import React, { Component } from 'react';
import { Button, TextArea, Form, Dropdown, Modal } from 'semantic-ui-react'

class UpdateModal extends Component {

    render() {
        const { inputChange, currState, buttonWord, title } = this.props;

        return (
            <Modal trigger={<Dropdown.Item className = 'hoverLink'>{buttonWord}</Dropdown.Item>}>
                <Modal.Header className='tc'> Post Update </Modal.Header>
                <Modal.Content>
                    <Form size='huge'>
                        <Form.Field>
                            <h1> Title {title} </h1>
                        </Form.Field>
                        <Form.Field>
                            <h1> Update </h1>
                            <TextArea
                                // focus value = {currState.description} 
                                onChange={(event) => inputChange(event, 'description')} style={{ minHeight: 200 }} />
                        </Form.Field>
                        <Button labelPosition='right' icon='right chevron' content='Update' />
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }
}

export default UpdateModal;