import React from 'react';
import { Button, Header, Icon, Segment } from 'semantic-ui-react'

const EmptySupportSegment = () => (
    <div className = 'mv3'>
        <Header icon>
            <Icon name='bullhorn' circular color = 'blue'/>
            Oops, no one has expressed their supported for this yet!
         </Header>
        <Segment.Inline>
            <Button primary>Be the first!</Button>
        </Segment.Inline>
    </div>
);

export default EmptySupportSegment;