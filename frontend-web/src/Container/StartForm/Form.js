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
            isEditing: false,
            finished: false,
            userID: props.userID,
            username: props.username,
            id: '',
            currentStep: 1,
            type: '',
            title: '',
            recipient: [],
            date_end: null,
            targetNum: '',
            anonymity: false,
            tags: [],
            description: '',
            imageURL: '',
        }
    }


    componentDidMount() {
        const { predefinedType, editing, id } = this.props.location.state;
        this.setState({ type: predefinedType, id: id });
        if (editing) {
            this.loadData(id);
        }
    }

    loadData = (id) => { // fetch data to be able to edit later on
        fetch(`http://localhost:3001/retrieve/${id}`)
            .then(resp => resp.json())
            .then(data => {
                let date_end;
                if(data.type === 'campaign') {
                    date_end = data.date_end.substring(0,10);
                } else{
                    date_end = data.date_end;
                }
                this.setState({
                    isEditing: true,
                    type: data.type,
                    title: data.title,
                    recipient: data.recipient,
                    date_end: date_end,
                    targetNum: data.targetnumsupporters,
                    anonymity: data.anonymity,
                    tags: data.tags,
                    description: data.description,
                    imageURL: data.imageurl,
                });
            });
    }

    resetDefault = () => {
        this.setState({
            finished: false,
            userID: this.props.userID,
            username: this.props.username,
            type: '',
            title: '',
            recipient: '',
            date_end: '',
            targetNum: '',
            anonymity: false,
            tags: [],
            description: '',
            imageURL: '',
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
        switch (category) {
            case "title":
                this.setState({ title: event.target.value }); //petition or campaign 
                break;
            case "recipient":
                this.setState({ recipient: [event.target.value] }); //petition or campaign 
                break;
            case "targetNum":
                this.setState({ targetNum: event.target.value }); //petition or campaign 
                break;
            case "date":
                this.setState({ date_end: event.target.value }); //petition or campaign 
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

    onSubmitForm = () => {
        if (this.state.isEditing) {
            this.updateForm();
        } else {
            this.submitForm();
        }
    }

    submitForm = () => { //modify this after database is coded
        console.log(this.state);
        fetch('http://localhost:3001/submitform', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                userID: this.state.userID,
                username: this.state.username,
                type: this.state.type,
                title: this.state.title,
                recipient: this.state.recipient,
                date_end: this.state.date_end,
                targetNum: this.state.targetNum,
                anonymity: this.state.anonymity,
                tags: this.state.tags,
                description: this.state.description,
                imageURL: this.state.imageURL,
            })
        })
            .then(resp => resp.json())
            .then(data => {
                console.log("after form submitted", data);
                this.setState({ currentStep: 5, finished: true });
            })
    }

    updateForm = () => {
        fetch('http://localhost:3001/updateform', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                id: this.state.id,
                recipient: this.state.recipient,
                date_end: this.state.date_end,
                targetNum: this.state.targetNum,
                anonymity: this.state.anonymity,
                tags: this.state.tags,
                description: this.state.description,
                imageURL: this.state.imageURL,
            })
        })
            .then(resp => resp.json())
            .then(data => { 
                console.log("after form submitted", data); //this is the id of the newly created
                this.setState({ currentStep: 5, finished: true });
            }).catch(err => {
                alert('Form submission failed');
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
                            currState={this.state}
                        />}
                    {this.state.currentStep === 2 &&
                        <FormStep2
                            navButton={this.currentStep}
                            inputChange={this.onInputChange}
                            toggleAnonymity={this.toggleAnonymity}
                            currentAnonymity={this.state.anonymity}
                            currState={this.state}
                        />}
                    {this.state.currentStep === 3 &&
                        <FormStep3
                            navButton={this.currentStep}
                            inputChange={this.onInputChange}
                            dropdownChange={this.onDropdownChange}
                            currState={this.state}
                        />}
                    {this.state.currentStep === 4 &&
                        <FormStep4
                            navButton={this.currentStep}
                            currState={this.state}
                            onSubmitForm={this.onSubmitForm}
                        />}
                    {this.state.finished && //all steps completed
                        <FormStep5
                            type={this.state.type}
                        />}
                </div>
            </div>
        );
    }
}

export default StartForm;