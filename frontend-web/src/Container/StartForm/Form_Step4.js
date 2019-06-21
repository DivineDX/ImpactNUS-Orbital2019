import React from 'react';
import { Button } from 'semantic-ui-react'

const Form_Step4 = ({ navButton, currType }) => {
    return (
        <div>
            <h1>This is a preview of your {currType}</h1>
            <Button.Group>
                <Button labelPosition='left' icon='left chevron' onClick={() => navButton(3)} content='Previous' />
                <Button labelPosition='right' icon='check' onClick={() => navButton(4)} content='Confirm and Post' />
            </Button.Group>
        </div>
    );
}

export default Form_Step4;