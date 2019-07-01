import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Link } from 'react-router-dom'
import './FeaturedCard.css';

const Card = (props) => {
    const loadedData = props.loadedData;
    //unused consts in props.loadedData: recipient, date_started, date_end, description, tags, numFollowing, finished 
    const { id, type, title, organizer, anonymity, image, targetNum, numSupporters} = loadedData;
    let smalltext = '';

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
            <div id="wrapContent">
                <h3 id = "titleContainer">
                    <Link to={`/pg/${id}`}>
                        {title}
                    </Link>
                </h3>
                <div id = "detailContainer">
                    <div className="pb1 smalltxt"> {smalltext} </div>
                    <ProgressBar numSupporters={numSupporters} targetNum={targetNum} />
                    <p className="b pt2"> Initiated by: {displayedOrganizer}</p>
                </div>

            </div>
        </div>
    )
}

export default Card;