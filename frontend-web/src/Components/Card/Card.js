import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Link } from 'react-router-dom'
import './Card.css';

const Card = (props) => {
    const loadedData = props.loadedData;
    //unsued const: date_started,date_end,  description, numFollowing, finished, tags
    const {id, type, title, recipient, organizer, anonymity, image, targetNum, numSupporters} = loadedData;
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
                    <h3 className="w-80">
                        <Link to = {`/pg/${id}`}>
                            {title} 
                        </Link>
                    </h3>
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