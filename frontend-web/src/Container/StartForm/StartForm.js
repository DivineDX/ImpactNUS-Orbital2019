import React, {Component} from 'react';
import MultistepMenu from './MultistepMenu';
import Form_Step1 from './Form_Step1';
import Form_Step2 from './Form_Step2';
import Form_Step3 from './Form_Step3';

class StartForm extends Component{
    constructor() {
        super();
        this.state = { 
            step: '1',
            type: '',

            /*
            Will have 4 steps
            1: [State] Choose petition or campaign, title
            2: [Specify]: Target recipient/group, Target End Date, Target Supporters, Anonymity (Petition only) 
            3: [Describe] Tags, Description and Image
            */
        }
    }
	render() {
		return (	 //acts as a card list here
			<div className = 'flex flex-column items-center'>
                <MultistepMenu/>
                {/* <Form_Step1/> */}
                <div className = 'w-70 '>
                    <Form_Step3/>
                </div>
            </div>
			
    	);
  }
}

export default StartForm;