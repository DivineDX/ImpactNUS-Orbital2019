import React, { Component } from 'react';
import { Button, Dropdown, Modal } from 'semantic-ui-react'

class VictoryModal extends Component {
    constructor() {
        super();
        this.state = {
            clickedVictory: false,
        }
    }

    clickVictory = () => { //modify this after database is coded
        fetch('http://localhost:3001/victory', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                id: Number(this.props.id),
                organizerID: this.props.userID,
            })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data === 'Success') {
                    this.setState({ clickedVictory: true });
                    this.props.refresh();
                }
            })
    }

    render() {
        const { buttonWord } = this.props;

        return (
            <Modal trigger={<Dropdown.Item className='hoverLink'>{buttonWord}</Dropdown.Item>}>
                <Modal.Header className='tc'> Declare Victory </Modal.Header>
                <Modal.Content>
                    <p> Are you sure you want to declare victory? By doing so, you won't be able to gain more supporters </p>
                    <Button positive onClick={() => this.clickVictory()}>
                        Declare
                    </Button>
                    {
                        this.state.clickedVictory
                            ? <h3>Victory Declared! Click anywhere out of the modal to exit</h3>
                            : <div></div>
                    }
                </Modal.Content>

            </Modal>
        );
    }
}

export default VictoryModal;