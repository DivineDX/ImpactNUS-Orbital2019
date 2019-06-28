import React from 'react';
import { Button, Dropdown, Modal } from 'semantic-ui-react'

const DeleteModal = (props) => {
    const { type } = props;
    
    function handleClick() {
		this.setState({
			finished: true,
		});
    }
    
    return(
        <Modal trigger={
            <Dropdown.Item className = 'hoverLink'>
                { type === 'petition'
                    ? "Delete Petition"
                    : "Delete Campaign"}
            </Dropdown.Item>
        }>
            <Modal.Header className='tc'> Delete {type} </Modal.Header>
            <Modal.Content>
                <p> Are you sure you want to delete your {type}? This action is irreversible</p>
                <Button negative onClick={() => handleClick() } content='End'/>
            </Modal.Content>
        </Modal>
    );
}



export default DeleteModal;