import React, { Component } from 'react';
import MultistepMenu from './MultistepMenu';
import FormStep1 from './Form_Step1';
import FormStep2 from './Form_Step2';
import FormStep3 from './Form_Step3';

class StartForm extends Component {
    constructor() {
        super();
        this.state = {
            currentStep: 1,
        }
        /*
        Will have 4 steps
        1: [State] Choose petition or campaign, title
        2: [Specify]: Target recipient/group, Target End Date, Target Supporters, Anonymity (Petition only) 
        3: [Describe] Tags, Description and Image
        */
    }

    currentStep = (stepNumber) => {
        if(stepNumber === 1){
            this.setState({currentStep: 1});
        } else if(stepNumber === 2){
            this.setState({currentStep: 2});
        } else if (stepNumber === 3){
            this.setState({currentStep: 3});
        }
    }

    render() {        
        return (	 //acts as a card list here
            <div className='flex flex-column items-center'>
                <MultistepMenu />
                <div className='w-70'>
                    {this.state.currentStep === 1 && <FormStep1/>}
                    {this.state.currentStep === 2 && <FormStep2/>}
                    {this.state.currentStep === 3 && <FormStep3/>}
                </div>
            </div>
        );
    }
}

export default StartForm;