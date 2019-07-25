import React from 'react';
import { Button } from 'semantic-ui-react'
import { Markup } from 'interweave';

const Form_Step4 = ({ navButton, currState, onSubmitForm }) => {
    const currType = currState.type;
    const descHTML = <Markup content={currState.description.toString("html")}/>;
    
    return (
        <div>
            <h1 id='Testing123'>Please confirm your {currType} details</h1>
            {currType === 'petition' &&
                <div>
                    <h2 >Title: {currState.title}</h2>
                    <h2>Decision Maker: {currState.recipient}</h2>
                    <h2>Target Supporters: {currState.targetNum}</h2>
                    <h2>Anonymity: {currState.anonymity.toString()}</h2>
                    <h2>
                        Tags: {currState.tags.join(", ")}
                    </h2>
                    <h2>Description:</h2>
                    <p>{descHTML}</p>
                    <h2>ImageURL: {currState.imageURL}</h2>
                </div>
            }

            {currType === 'campaign' &&
                <div>
                    <h2>Title: {currState.title}</h2>
                    <h2>Target Group: {currState.recipient}</h2>
                    <h2>Target Supporters: {currState.targetNum}</h2>
                    <h2>Target End Date: {currState.date_end.toDateString()}</h2>
                    <h2> Tags: {currState.tags.join(", ")}</h2>
                    <h2>Description: </h2>
                    <p>{descHTML}</p>
                    <h2>ImageURL: {currState.imageURL}</h2>
                </div>
            }

            <Button.Group>
                <Button labelPosition='left' icon='left chevron' onClick={() => navButton(3)} content='Previous' />
                <Button labelPosition='right' icon='check' onClick={() => onSubmitForm()} content='Confirm and Post' />
            </Button.Group>
        </div>
    );
}

export default Form_Step4;