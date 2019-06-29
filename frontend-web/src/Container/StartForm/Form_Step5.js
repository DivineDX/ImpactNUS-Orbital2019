import React from 'react';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Form_Step5 = ({ type }) => { //final step
    return (
        <div className='tc center'>
            <h3 className='tc f2'>Congrats on your submission!</h3>
            <div>
                <Link to="/">
                    <Button circular size='huge' color='green'>Go back to Homepage</Button>
                </Link>
                <Link to="/">
                    <Button circular size='huge' color='orange'>View your {type}</Button>

                </Link>
            </div>
        </div>
    );
}

export default Form_Step5;