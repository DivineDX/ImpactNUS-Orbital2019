import React, { Component } from 'react';
import MultistepMenu from './MultistepMenu';
import FormStep1 from './Form_Step1';
import FormStep2 from './Form_Step2';
import FormStep3 from './Form_Step3';
import FormStep4 from './Form_Step4';
import './EditForm.css';
import { Data } from '../../Data/Data'

const defaultState = {
    currentStep: 1,
    id: '', 
    type: '',
    title: '',
    targetGroup: '',
    // endDate: '',
    targetSupporters: '',
    anonymity: false,
    tags: [],
    description: '',
    imageURL: ''
}

class EditForm extends Component {
    constructor() {
        super();
        this.state = {
            Data: Data,
            currentStep: 1,
            id: '1',
            type: '',
            title: '',
            targetGroup: '',
            endDate: '',
            targetSupporters: '',
            anonymity: false,
            tags: [],
            description: '',
            imageURL: ''
        }
        /*
        Will have 4 steps
        1: [State] Choose petition or campaign, title
        2: [Specify]: Target recipient/group, Target End Date, Target Supporters, Anonymity (Petition only) 
        3: [Describe] Tags, Description and Image
        4: Preview and Confirmation
        */
    }

    // loop through the data in Data, if there is a type and id that matches, return that data 


    toggleType = (type) => {
        if (type === 'petition') {
            this.setState({ type: 'petition' });
        } else if (type === 'campaign') {
            this.setState({ type: 'campaign' });
        }
    }

    toggleAnonymity = () => {
        if (this.state.anonymity) { //true
            this.setState({ anonymity: false });
        } else {
            this.setState({ anonymity: true });
        }
    }

    onInputChange = (event, category) => {
        // console.log("input Change", category);
        switch (category) {
            case "title":
                this.setState({ title: event.target.value }); //petition or campaign 
                break;
            case "targetGroup":
                this.setState({ targetGroup: event.target.value }); //petition or campaign 
                break;
            case "targetSupporters":
                this.setState({ targetSupporters: event.target.value }); //petition or campaign 
                break;
            case "date":
                console.log("Date change");
                console.log(event.target.value);
                this.setState({ endDate: event.target.value }); //petition or campaign 
                break;
            case "description":
                this.setState({ description: event.target.value }); //petition or campaign 
                break;
            case "imageURL":
                this.setState({ imageURL: event.target.value }); //petition or campaign 
                break;

            default:
                break;
        }
    }

    onDropdownChange = (e, { value }) => {
        // console.log(value);
        this.setState({ tags: value });
    }

    currentStep = (stepNumber) => {
        switch (stepNumber) {
            case 1:
                this.setState({ currentStep: 1 });
                break;
            case 2:
                this.setState({ currentStep: 2 });
                break;
            case 3:
                this.setState({ currentStep: 3 });
                break;
            case 4:
                this.setState({ currentStep: 4 });
                break;
            default:
                this.setState({ currentStep: 1 });
                break;
        }
    }

    render() {
        return (	 //acts as a card list here
            <div id="formContainer" className = "flex flex-column items-center mt4 mb4">
                <div id = "stepContainer" className = "pb3">
                    <MultistepMenu currentStep={this.state.currentStep} />
                </div>
                
                <div id="inputContainer">
                    {this.state.currentStep === 1 &&
                        <FormStep1
                            navButton={this.currentStep}
                            toggleType={this.toggleType}
                            inputChange={this.onInputChange}
                            currState={this.state} />}
                    {this.state.currentStep === 2 &&
                        <FormStep2
                            navButton={this.currentStep}
                            inputChange={this.onInputChange}
                            toggleAnonymity={this.toggleAnonymity}
                            currentAnonymity={this.state.anonymity}
                            currState={this.state} />}
                    {this.state.currentStep === 3 &&
                        <FormStep3
                            navButton={this.currentStep}
                            inputChange={this.onInputChange}
                            dropdownChange={this.onDropdownChange}
                            currState={this.state} />}
                    {this.state.currentStep === 4 &&
                        <FormStep4
                            navButton={this.currentStep}
                            currState={this.state} />}
                </div>
            </div>
        );
    }
}

export default EditForm;