import React from 'react';
import { Button } from 'semantic-ui-react'

const Form_Step4 = ({ navButton, currState }) => {
    let currType = currState.type;

    return (
        <div>
            <h1>This is a preview of your {currType}</h1>
            { currType === 'petition' &&
                <div>
                    <h4>Title: {currState.title}</h4>
                    <h4>Decision Maker: {currState.targetGroup}</h4>
                    <h4>Target Supporters: {currState.targetSupporters}</h4>
                    <h4>Anonymity: {currState.anonymity.toString()}</h4>
                    <h4>
                        Tags: {currState.tags.join(", ")}
                    </h4>
                    <h4>Description: {currState.description}</h4>
                    <h4>ImageURL: {currState.imageURL}</h4>
                </div>
            }

            { currType === 'campaign' &&
                <div>
                    <h4>Title: {currState.title}</h4>
                    <h4>Target Group: {currState.targetGroup}</h4>
                    <h4>Target Supporters: {currState.targetSupporters}</h4>
                    <h4>Target End Date: {currState.endDate}</h4>
                    <h4> Tags: {currState.tags.join(", ")}</h4>
                    <h4>Description: {currState.description}</h4>
                    <h4>ImageURL: {currState.imageURL}</h4>
                </div>
            }
            
            <Button.Group>
                <Button labelPosition='left' icon='left chevron' onClick={() => navButton(3)} content='Previous' />
                <Button labelPosition='right' icon='check' onClick={() => navButton(4)} content='Confirm and Post' />
            </Button.Group>
        </div>
    );
}

export default Form_Step4;