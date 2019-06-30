import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Link } from 'react-router-dom'
import './FeaturedCard.css';

const Card = (props) => {
    const loadedData = props.loadedData;
    const {id, type, title, recipient, organizer, anonymity, date_started, date_end, description, tags, image, targetNum, numSupporters, numFollowing, finished} = loadedData;
    let smalltext = '';
    let sub = '';

    if (type === 'petition') {
        smalltext = "Target: " + targetNum + " | " + numSupporters + " Signed ";
    } else { //campaign
        smalltext = "Target: " + targetNum + " | " + numSupporters + " Supported ";
    }

    let displayedOrganizer = '';
    if (anonymity) {
        displayedOrganizer = "Anonymous";
    } else {
        displayedOrganizer = organizer;
    }

    return (
        <div className="shadow-4 w-100">
            <img src={image} className='' id="cardImg" alt="IMG" />
            <div id = "wrapContent">
                <div className="">
                    <h3 className="">
                        <Link to = {`/pg/${id}`}>
                            {title} 
                        </Link>
                    </h3>
                    <div className="pb1 smalltxt"> {smalltext} </div>
                </div>
                <ProgressBar numSupporters={numSupporters} targetNum={targetNum} />
                <p className="b pt2"> Initiated by: {displayedOrganizer}</p>
            </div>
        </div>
    )
}

export default Card;