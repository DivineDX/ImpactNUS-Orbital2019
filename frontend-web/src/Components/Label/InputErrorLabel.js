import React from 'react';
import { Label } from "semantic-ui-react";


const InputErrorLabel = ({ touched, errors }) => {
    if (touched && errors) {
        return (
            <Label className='tl' basic color='red' pointing>
                {errors}
            </Label>
        );
    } else {
        return null;
    }
}

export default InputErrorLabel;