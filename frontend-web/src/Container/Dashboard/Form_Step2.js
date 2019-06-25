import React, { Component } from 'react';
import { Button, Checkbox, Form, Input} from 'semantic-ui-react'
import { Data } from '../../Data/Data'
import "./Form.css";

const fakeData = Data[0];

const targetPetition = "Select a decision maker";
const targetCampaign = "Select a target audience";
const petitionPlaceholder = "This is the organization/person who is able to respond to your petition";
const campaignPlaceholder = "This is your main group of people you aim to reach out to";

class Form_Step2 extends Component {
    constructor() {
		super() 
		this.state = {
			Data: Data,
		}
	}
    render() {
        const {navButton, inputChange, toggleAnonymity, currentAnonymity, currState} = this.props;
        const currType = currState.type;
        let target, placeholder;
        if(fakeData.type === 'petition'){
            target = targetPetition;
            placeholder = petitionPlaceholder;
        }else if (fakeData.type === 'campaign') {
            target = targetCampaign;
            placeholder = campaignPlaceholder;
        }

        return (
            <Form size='huge'>
                <Form.Field>
                    <h1>{target}</h1>
                    <Input value = {currState.targetGroup} focus onChange={(event) => inputChange(event, 'targetGroup')} placeholder={fakeData.recipient}>
                    </Input>
                </Form.Field>
    
                <Form.Field>
                    <h1>State your target number of supporters</h1>
                    <Input 
                        value = {currState.targetSupporters}
                        focus min="0" type="number" placeholder={fakeData.targetNum} 
                        onChange={(event) => inputChange(event, 'targetSupporters')}/>
                </Form.Field>

                <Form.Field>
                    {currType === 'petition' && 
                        <Checkbox 
                            checked = {currentAnonymity}
                            onClick = {() => toggleAnonymity()}
                            label='Enable organizer anonymity' />
                    }
                    {currType === 'campaign' &&
                        <div>
                            <h3>Select a target end date for your campaign</h3>
                            <Input
                                type = "date"
                                value ={currState.endDate}
                                onChange={(event) => inputChange(event, 'date')}/>
                        </div>
                    }
                </Form.Field>
    
                <Button.Group>
                    <Button labelPosition='left' icon='left chevron' onClick={() => navButton(1)} content='Previous' />
                    <Button 
                        disabled = {currState.targetGroup === '' 
                        || (currState.type === 'petition' && currState.targetSupporters === '')
                        || (currState.type === 'campaign' && currState.endDate === '')} 
                        labelPosition='right' icon='right chevron' 
                        onClick={() => navButton(3)} 
                        content='Next' />
                </Button.Group>
            </Form>
        );
    }
}

export default Form_Step2;