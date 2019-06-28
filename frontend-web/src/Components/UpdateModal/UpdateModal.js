import React, { Component } from 'react';
import { Button, TextArea, Form, Dropdown, Input, Modal } from 'semantic-ui-react'

const targetPetition = "Select a decision maker";
const targetCampaign = "Select a target audience";
const petitionPlaceholder = "This is the organization/person who is able to respond to your petition";
const campaignPlaceholder = "This is your main group of people you aim to reach out to";


/* Old Tachyons button <button className="dib bg-animate hover-bg-orange no-underline pv2 ph4 br-pill ba">Login</button> */
class UpdateModal extends Component {
    
    render() {
        const { inputChange, currState, buttonWord, title } = this.props;
        
        return(
            <Modal trigger={<Button>{buttonWord}</Button>}>
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