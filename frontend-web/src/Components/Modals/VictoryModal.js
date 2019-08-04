import React, { Component } from 'react';
import { Button, Dropdown, Modal } from 'semantic-ui-react'
import Cookies from 'universal-cookie';

const keywords = {
    petition: ["Declare Victory", "declare victory", "Victory Declared!"],
    campaign: ["Conclude Campaign", "conclude this campaign", "Campaign Concluded!"],
}

class VictoryModal extends Component {
    constructor() {
        super();
        this.state = {
            clickedVictory: false,
            authFailed: false,
        }
    }

    clickVictory = () => { //modify this after database is coded
        fetch('http://impactnus-api.herokuapp.com/victory', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                id: Number(this.props.id),
                organizerID: this.props.userID,
                jwtToken: new Cookies().get('token'),
            })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data === 'Success') {
                    this.setState({ clickedVictory: true });
                    this.props.refresh();
                } else if (data === 'Auth failed') {
                    this.setState({authFailed: true});
                }
            })
    }

    render() {
        const { type } = this.props;
        let filledWords;
        if (type === 'petition') {
            filledWords = keywords.petition;
        } else {
            filledWords = keywords.campaign;
        }

        return (
            <Modal trigger={<Dropdown.Item className='hoverLink'>{filledWords[0]}</Dropdown.Item>}>
                <Modal.Header className='tc'> Declare Victory </Modal.Header>
                <Modal.Content>
                    <p> Are you sure you want to {filledWords[1]}? This action cannot be undone </p>

                    <Button positive onClick={() => this.clickVictory()}>
                        {filledWords[0]}
                    </Button>
                    {
                        this.state.clickedVictory
                            ? <h3>{filledWords[2]} Click anywhere out of the modal to exit</h3>
                            : <div></div>
                    }

                    {
                        this.state.authFailed
                            ? <h3 className = 'red'>User authentication failed</h3>
                            : <div></div>
                    }
                </Modal.Content>
            </Modal>
        );
    }
}

export default VictoryModal;