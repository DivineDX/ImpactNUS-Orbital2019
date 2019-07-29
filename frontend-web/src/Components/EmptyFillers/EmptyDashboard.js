import React from 'react';
import { Header, Icon } from 'semantic-ui-react'

const EmptyDashboard = () => (
    <div className='mv7 flex justify-center'>
        <Header as='h2' icon>
            <Icon circular color = 'blue' name='bullhorn' />
            Your Dashboard is empty at the moment
            {/* <Header.Subheader>Get Started now!</Header.Subheader> */}
        </Header>
    </div>
);

export default EmptyDashboard;