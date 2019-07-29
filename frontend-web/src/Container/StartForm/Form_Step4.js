import React from 'react';
import { Button, Image } from 'semantic-ui-react'
import { Markup } from 'interweave';
import { Segment } from 'semantic-ui-react'
import wireframeImage from '../../Images/wireframeImage.png';

const Form_Step4 = ({ navButton, currState, onSubmitForm }) => {
    const currType = currState.type;
    const descHTML = <Markup content={currState.description.toString("html")} />;

    return (
        <div>
            <h1 id='HeaderNote'>Please confirm your {currType} details</h1>
            {currType === 'petition' &&
                <Segment.Group>
                    <Segment attached>
                        <h2>Title</h2>
                        {currState.title}
                    </Segment>

                    <Segment attached>
                        <h2>Decision Maker</h2>
                        {currState.recipient}
                    </Segment>

                    <Segment attached>
                        <h2>Target Supporters</h2>
                        {currState.targetNum}
                    </Segment>

                    <Segment attached>
                        <h2>Anonymity</h2>
                        {currState.anonymity.toString()}
                    </Segment>

                    <Segment attached>
                        <h2>Image</h2>
                        <Image
                            onError={(e) => { e.target.onerror = null; e.target.src = wireframeImage }}
                            size='medium' src={currState.imageURL} alt="image" />
                    </Segment>

                    <Segment attached>
                        <h2>Description</h2>
                        <p className='textEditorFix'>{descHTML}</p>
                    </Segment>
                </Segment.Group>
            }

            {currType === 'campaign' &&
                <Segment.Group>
                    <Segment attached>
                        <h2>Title</h2>
                        {currState.title}
                    </Segment>

                    <Segment attached>
                        <h2>Target Group</h2>
                        {currState.recipient}
                    </Segment>

                    <Segment attached>
                        <h2>Target Supporters</h2>
                        {currState.targetNum}
                    </Segment>

                    <Segment attached>
                        <h2>Target End Date</h2>
                        {currState.date_end.toDateString()}
                    </Segment>

                    <Segment attached>
                        <h2>Image</h2>
                        <Image
                            onError={(e) => { e.target.onerror = null; e.target.src = wireframeImage }}
                            size='medium' src={currState.imageURL} alt="image" />
                    </Segment>

                    <Segment attached>
                        <h2>Description</h2>
                        <p className='textEditorFix'>{descHTML}</p>
                    </Segment>
                </Segment.Group>
            }

            <Button.Group>
                <Button labelPosition='left' icon='left chevron' onClick={() => navButton(3)} className='formButton' content='Previous' />
                <Button labelPosition='right' icon='check' onClick={() => onSubmitForm()} className='formButton' content='Confirm and Post' />
            </Button.Group>
        </div>
    );
}

export default Form_Step4;