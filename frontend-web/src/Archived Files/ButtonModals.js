import React from 'react';
import { Modal } from 'semantic-ui-react'
import LoginForm from '../Components/LoginForm/LoginForm';

/* Old Tachyons button <button className="dib bg-animate hover-bg-orange no-underline pv2 ph4 br-pill ba">Login</button> */
const ButtonModal = ({loginProp, buttonWord}) => ( //passed from parent
    <Modal trigger={<a className="pillButton" href="#0">
                        {buttonWord}
                    </a>}>
        <Modal.Header className='tc'>Login Page</Modal.Header>
        <Modal.Content>
            <LoginForm loginProp = {loginProp}/> 
        </Modal.Content>
    </Modal>
);

export default ButtonModal;