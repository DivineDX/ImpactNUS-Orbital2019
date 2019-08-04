import React, { Component } from 'react';
import RichTextEditor from "react-rte";
import MultistepMenu from './MultistepMenu';
import FormStep1 from './Form_Step1';
import FormStep2 from './Form_Step2';
import FormStep3 from './Form_Step3';
import FormStep4 from './Form_Step4';
import FormStep5 from './Form_Step5';
import Loading from '../../Components/Loader/Loading';
import ExceedStartLimit from '../../Components/EmptyFillers/ExceedStartLimit';

import './Form.css';
import Cookies from 'universal-cookie';
import AuthFailed from '../NonExistentPage/AuthFailed';

class StartForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canStart: false,
            isEditing: false,
            authFailed: false,
            finished: false,
            loading: true,
            id: '',
            currentStep: 1,
            type: '',
            title: '',
            recipient: [],
            date_end: null,
            targetNum: 10,
            anonymity: false,
            // tags: [],
            description: RichTextEditor.createEmptyValue(),
            imageURL: '',
        }
    }

    componentDidMount() {
        setTimeout(this.checkStart, 1500); //anti-spam
        if (this.props.location.state !== undefined) {
            const { predefinedType, editing, id } = this.props.location.state;
            this.setState({ type: predefinedType, id: id });
            if (editing) {
                this.setState({ canStart: true });
                this.loadData(id);
            }
        }
    }

    checkStart = () => {
        fetch('http://fathomless-ocean-65423.herokuapp.com/checkStart', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                userID: this.props.userID,
            })
        })
            .then(resp => resp.json())
            .then(data => {
                console.log("Checking start", data);
                if (data) { //not exceed
                    this.setState({ canStart: true });
                }
                this.setState({ loading: false });
            }).catch(err => console.log("Cannot check", err));
    }

    getEndDate = () => {
        if (this.state.type === 'campaign') {
            return this.state.date_end.toISOString();
        } else {
            return null;
        }
    }

    loadData = (id) => { // fetch data to be able to edit later on
        fetch(`http://fathomless-ocean-65423.herokuapp.com/retrieve/${id}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    isEditing: true,
                    loading: false,
                    type: data.type,
                    title: data.title,
                    recipient: data.recipient,
                    date_end: new Date(data.date_end), //ISO string
                    targetNum: data.targetnumsupporters,
                    anonymity: data.anonymity,
                    // tags: data.tags,
                    description: RichTextEditor.createValueFromString(data.description, 'html'),
                    imageURL: data.imageurl,
                });
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

    onDropdownChange = (e, { value }) => {
        this.setState({ tags: value });
    }

    changeStep = (stepNumber, values) => {
        this.setState({ currentStep: stepNumber });
        this.setState(values);
    }

    onSubmitForm = () => {
        if (this.state.isEditing) {
            this.updateForm();
        } else {
            this.submitForm();
        }
    }

    submitForm = () => {
        fetch('http://fathomless-ocean-65423.herokuapp.com/submitform', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                jwtToken: new Cookies().get('token'),
                userID: this.props.userID,
                type: this.state.type,
                title: this.state.title,
                recipient: [this.state.recipient],
                date_end: this.getEndDate(),
                targetNum: this.state.targetNum,
                anonymity: this.state.anonymity,
                // tags: this.state.tags,
                description: this.state.description.toString('html'),
                imageURL: this.state.imageURL,
            })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data === 'Auth failed') {
                    this.setState({ authFailed: true });
                } else if (data !== 'Unable to post') {
                    this.setState({ currentStep: 5, finished: true });
                }
            })
    }

    updateForm = () => {
        fetch('http://fathomless-ocean-65423.herokuapp.com/updateform', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                jwtToken: new Cookies().get('token'),
                userID: this.props.userID,
                id: this.state.id,
                recipient: [this.state.recipient],
                date_end: this.getEndDate(),
                targetNum: this.state.targetNum,
                anonymity: this.state.anonymity,
                // tags: this.state.tags,
                description: this.state.description.toString('html'),
                imageURL: this.state.imageURL,
            })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data === 'Auth failed') {
                    this.setState({ authFailed: true });
                } else if (data === this.state.id) { //success 
                    this.setState({ currentStep: 5, finished: true });
                }
            }).catch(err => {
                alert('Form submission failed');
            })
    }

    render() {
        if (this.state.loading) {
            return <div className="mt7">
                <Loading />
            </div>
        }
        else if (!this.state.loading && !this.state.canStart) { //cannot start
            return <ExceedStartLimit />
        } else if (this.state.authFailed) {
            return <AuthFailed />
        }
        else {
            return (	 //acts as a card list here
                <div id="formContainer" className="flex flex-column items-center mv4">
                    {!this.state.finished &&
                        <div className="pb3 pl1">
                            <MultistepMenu currentStep={this.state.currentStep} />
                        </div>}

                    <div >
                        {this.state.currentStep === 1 &&
                            <FormStep1
                                navButton={this.changeStep}
                                toggleType={this.toggleType}
                                currState={this.state}
                            />}
                        {this.state.currentStep === 2 &&
                            <FormStep2
                                navButton={this.changeStep}
                                toggleAnonymity={this.toggleAnonymity}
                                currentAnonymity={this.state.anonymity}
                                currState={this.state}
                            />}
                        {this.state.currentStep === 3 &&
                            <FormStep3
                                navButton={this.changeStep}
                                inputChange={this.onInputChange}
                                dropdownChange={this.onDropdownChange}
                                currState={this.state}
                            />}
                        {this.state.currentStep === 4 &&
                            <FormStep4
                                navButton={this.changeStep}
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
}

export default StartForm;