import React, { Component } from 'react';
import { Button, Checkbox, Form, Input } from 'semantic-ui-react'

const targetPetition = "Select a decision maker";
const targetCampaign = "Select a target audience";
const petitionPlaceholder = "This is the organization/person who is able to respond to your petition";
const campaignPlaceholder = "This is your main group of people you aim to reach out to";

class Form_Step2 extends Component {
    render() {
        const { navButton, inputChange, toggleAnonymity, currentAnonymity, currState } = this.props;
        const currType = currState.type;
        let target, placeholder;
        if (currType === 'petition') {
            target = targetPetition;
            placeholder = petitionPlaceholder;
        } else if (currType === 'campaign') {
            target = targetCampaign;
            placeholder = campaignPlaceholder;
        }

        return (
            <Form size='huge'>
                <Form.Field>
                    <h1>{target}</h1>
                    <Input value={currState.recipient} focus onChange={(event) => inputChange(event, 'recipient')} placeholder={placeholder} />
                </Form.Field>

                <Form.Field>
                    <h1>State your target number of supporters</h1>
                    <Input
                        value={currState.targetNum}
                        focus min="0" type="number" placeholder="Target Number"
                        onChange={(event) => inputChange(event, 'targetNum')} />
                </Form.Field>

                <Form.Field>
                    {currType === 'petition' &&
                        <Checkbox
                            checked={currentAnonymity}
                            onClick={() => toggleAnonymity()}
                            label='Enable organizer anonymity' />
                    }
                    {currType === 'campaign' &&
                        <div>
                            <h3>Select a target end date for your campaign</h3>
                            <Input
                                type="date"
                                value={currState.date_end}
                                onChange={(event) => inputChange(event, 'date')} />
                        </div>
                    }
                </Form.Field>

                <Button.Group>
                    <Button labelPosition='left' icon='left chevron' onClick={() => navButton(1)} content='Previous' />
                    <Button
                        disabled={
                            !currState.isEditing &&
                            ((currState.recipient === undefined || currState.recipient.length === 0 || currState.recipient[0] === '') //not filled
                                || (currState.type === 'petition' && currState.targetNum === '')
                                || (currState.type === 'campaign' && 
                                    (currState.targetNum === '' || currState.date_end === '')))
                            }
                        labelPosition='right' icon='right chevron'
                        onClick={() => navButton(3)}
                        content='Next' />
                </Button.Group>
            </Form>
        );
    }
}

export default Form_Step2;