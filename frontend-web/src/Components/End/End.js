import React, { Component } from 'react';
import { Button, TextArea, Form, Dropdown, Input, Modal } from 'semantic-ui-react'
import { Data } from '../../Data/Data'

const End = (props) => {
    const { buttonWord, type } = props;
    
    function handleClick() {
		this.setState({
			finished: true,
		});
	}
    return(
        <Modal trigger={<Button>{buttonWord}</Button>}>
            <Modal.Header className='tc'> End {type} </Modal.Header>
            <Modal.Content>
                <p> Are you sure you want to end {type} ? By doing so, you won't be able to gain more supporters </p>
                <Button negative onClick={() => handleClick() } content='End'/>
            </Modal.Content>
        </Modal>
    );
}



export default End;