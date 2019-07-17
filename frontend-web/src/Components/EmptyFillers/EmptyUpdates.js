import React from 'react';
import {Header, Icon } from 'semantic-ui-react'

const EmptyUpdates = () => (
    <div className = 'mt4 mb2'>
        <Header icon>
            <Icon name='microphone slash' circular color = 'blue'/>
            The organizer has yet to post any updates
         </Header>
    </div>
);

export default EmptyUpdates;