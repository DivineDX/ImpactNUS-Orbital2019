import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Link } from 'react-router-dom'
import './FeaturedCard.css';

const Card = (props) => {
    const loadedData = props.loadedData;
    //unused consts in props.loadedData: recipient, date_started, date_end, description, tags, numFollowing, finished 
    const { id, type, title, name, anonymity, imageurl, targetnumsupporters, currnumsupporters} = loadedData;
    let smalltext = '';

    if (type === 'petition') {
        smalltext = "Target: " + targetnumsupporters + " | " + currnumsupporters + " Signed ";
    } else { //campaign
        smalltext = "Target: " + targetnumsupporters + " | " + currnumsupporters + " Supported ";
    }

    let displayedOrganizer = '';
    if (anonymity) {
        displayedOrganizer = "Anonymous";
    } else {
        displayedOrganizer = name;
    }

    return (
        <div className="shadow-4 w-100">
            <img src={imageurl} className='' id="cardImg" alt="IMG" />
            <div id="wrapContent">
                <h3 id = "titleContainer">
                    <Link to={`/pg/${id}`}>
                        {title}
                    </Link>
                </h3>
                <div id = "detailContainer">
                    <div className="pb1 smalltxt"> {smalltext} </div>
                    <ProgressBar numSupporters={currnumsupporters} targetNum={targetnumsupporters} />
                    <p className="b pt2"> Initiated by: {displayedOrganizer}</p>
                </div>

            </div>
        </div>
    )
}

export default Card;