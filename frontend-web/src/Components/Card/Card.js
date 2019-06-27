import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import './Card.css';
// import FollowButton from '../../Components/Buttons/FollowButton';

//const Card = ({ key, type, title, recipient, organizer, anonymity, date_started, description, image, targetNum, numSupporters, numFollowing }) => {

const Card = (props) => {
    const {key, type, title, recipient, organizer, anonymity, date_started, description, image, targetNum, numSupporters, numFollowing} = props;
    let footer = '';
    let sub = '';
    if (type === 'petition') {
        footer = numSupporters + " Signed | Target: " + targetNum;
        sub = "Petition to: " + recipient;
    } else { //campaign
        footer = numSupporters + " Supported | Target: " + targetNum;
        sub = "Reaching out to: " + recipient;
    }

    let displayedOrganizer = '';
    if (anonymity) {
        displayedOrganizer = "Anonymous";
    } else {
        displayedOrganizer = organizer;
    }

    return (
        <div className="avenir card-container shadow-4">
            <img src={image} className="w-100" id="cardImage" alt="IMG" />
            <div id = "contentWrap">
                <div className="text_wrap flex flex-row">
                    <h3 className="w-80">{title} </h3>
                    <div className="w-20">{props.children}</div>
                </div>
                <p className="i pt3">{sub}</p>
                <p className="b"> Initiated by: {displayedOrganizer}</p>
                <ProgressBar numSupporters={numSupporters} targetNum={targetNum} />
                <p>{footer}</p>
            </div>
        </div>
    )
}

export default Card;