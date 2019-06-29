import React, { Component } from 'react';
import MultistepMenu from './MultistepMenu';
import FormStep1 from './Form_Step1';
import FormStep2 from './Form_Step2';
import FormStep3 from './Form_Step3';
import FormStep4 from './Form_Step4';
import FormStep5 from './Form_Step5';
import './Form.css';

class StartForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finished: false,
            userID: props.userID,
            username: props.username,
            isEditing: props.isEditing,
            currentStep: 1,
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
    }

    resetDefault = () => {
        this.setState({
            finished: false,
            userID: this.props.userID,
            username: this.props.username,
            isEditing: this.props.isEditing,
            type: '',
            title: '',
            targetGroup: '',
            endDate: '',
            targetSupporters: '',
            anonymity: false,
            tags: [],
            description: '',
            imageURL: ''
        });
    }

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

    onSubmitForm = () => { //modify this after database is coded
        fetch('http://localhost:3001/submitform', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                userID: this.state.userID,
                username: this.state.username,
                type: this.state.type,
                title: this.state.title,
                targetGroup: this.state.targetGroup,
                endDate: this.state.endDate,
                targetSupporters: this.state.targetSupporters,
                anonymity: this.state.anonymity,
                tags: this.state.tags,
                description: this.state.description,
                imageURL: this.state.imageURL,
            })
        })
            .then(resp => resp.json())
            .then(data => {
                    // this.resetDefault();
                    this.setState({currentStep: 5, finished: true});
                    console.log(data); //Object Data of the created petition/campaign
            })
    }

    render() {
        return (	 //acts as a card list here
            <div id="formContainer" className="flex flex-column items-center mt4 mb4">
                {!this.state.finished &&
                    <div id="stepContainer" className="pb3">
                    <MultistepMenu currentStep={this.state.currentStep} />
                </div>}

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
                            currState={this.state}
                            onSubmitForm={this.onSubmitForm}
                        />}
                    {this.state.finished && //all steps completed
                        <FormStep5
                            type = {this.state.type}
                        />}
                </div>
            </div>
        );
    }
}

export default StartForm;