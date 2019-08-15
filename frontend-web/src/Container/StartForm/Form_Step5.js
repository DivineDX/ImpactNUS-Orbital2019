import React from 'react';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Form_Step5 = ({ update, type, completedID }) => { //final step
    return (
        <div className='tc center'>
            {
                update
                    ? <h3 className='tc f2'>Your update has been successful</h3>
                    : <h3 className='tc f2'>Congrats on your submission!</h3>
            }

            <div className="flex flex-row justify-center">
                <Link to="/">
                    <Button size='huge' className='formButton'>Go back to Homepage</Button>
                </Link>
                <Link to={`/pg/${completedID}`}>
                    <Button size='huge' className='formButton'>View your {type}</Button>
                </Link>
            </div>
        </div>
    );
}

export default Form_Step5;