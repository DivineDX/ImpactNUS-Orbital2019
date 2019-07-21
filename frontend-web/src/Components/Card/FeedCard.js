import React from 'react';
import { Link } from 'react-router-dom'
import './Card.css';
import wireframeImage from '../../Images/wireframeImage.png';
import { Icon, Image, Item } from 'semantic-ui-react'

const FeedCard = (props) => {
    const { pncID, pncTitle, updateTitle, content, datePosted, imageURL } = props.loadedData;

    return (
        <Item className = "mb4">
            <Item.Image size='small' src={imageURL} />

            <Item.Content>
                <Item.Header as='a'>{pncTitle}</Item.Header>
                <Item.Description>{updateTitle}</Item.Description>
                <Item.Extra>
                    {content}
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}

export default FeedCard;