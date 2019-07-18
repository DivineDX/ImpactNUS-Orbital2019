import React from 'react';
import { Header, Icon } from 'semantic-ui-react'

const ExceedStartLimit = () => (
    <div className='mv6 flex justify-center'>
        <Header icon>
            <Icon name='exclamation triangle' color = 'red' size = 'massive'/>
            You have exceeded your limit of 5 petitions and campaign per month!
            </Header>
    </div>
);

export default ExceedStartLimit;