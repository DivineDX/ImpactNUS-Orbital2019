import React from 'react';
import { Button, Modal } from 'semantic-ui-react'
import LoginForm from './LoginForm';
{/* Old Tachyons button <button className="dib bg-animate hover-bg-orange no-underline pv2 ph4 br-pill ba">Login</button> */ }

const LoginModal = () => (
    <Modal trigger={<Button>Login</Button>}>
        <Modal.Header className='tc'>Login Page</Modal.Header>
        <Modal.Content>
            <LoginForm/>
        </Modal.Content>
    </Modal>
);

export default LoginModal;