import React, { Component } from 'react';
import { Dropdown, Modal} from 'semantic-ui-react';
import UpdateForm from '../Forms/UpdateForm';

class UpdateModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: false,
        }
    }

    submitUpdate = (values) => { //modify this after database is coded
        fetch('http://localhost:3001/postupdate', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                id: this.props.id,
                updateTitle: values.title,
                updateContent: values.description,
                organizerID: this.props.userID,
            })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data === 'Success') {
                    this.setState({updated: true});
                }
            })
    }

    render() {
        const { buttonWord } = this.props;
        return (
            <Modal trigger={<Dropdown.Item className='hoverLink'>{buttonWord}</Dropdown.Item>}>
                <Modal.Header className='tc'>Post Update</Modal.Header>
                <Modal.Content>
                    <UpdateForm submitUpdate = {this.submitUpdate} updatePosted = {this.state.updated}/>
                </Modal.Content>
            </Modal>
        );
    }
}

export default UpdateModal;