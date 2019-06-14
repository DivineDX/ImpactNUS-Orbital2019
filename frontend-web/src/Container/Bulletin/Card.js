import React from 'react';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import './Card.css';

const Card = ({ key, type, title, recipient, organizer, anonymity, date_started, description, image, targetNum, numSupporters, numFollowing }) => { //Destructuring
    let footer = '';
    if (type === 'petition') {
        footer = numSupporters + " Signed | Target: " + targetNum;
    } else { //campaign
        footer = numSupporters + " Supported | Target: " + targetNum;
    }

    let displayedOrganizer = '';
    if (anonymity) {
        displayedOrganizer = "Anonymous";
    } else{
        displayedOrganizer = organizer;
    }

    return (
        <section className="avenir">
            <article className="bb b--black-10">
                    <div className="card-container">
                        <div className="img_wrap">
                            <img src={image} className="w-100" alt="IMG" />
                        </div>
                        <div className="text_wrap">
                            <h1 className="">{title}</h1>
                            <p className="i">{recipient}</p>
                            <p className="">
                                {description}
                            </p>
                            <p className="b">
                                By {displayedOrganizer}
                            </p>
                            <ProgressBar numSupporters = {numSupporters} targetNum = {targetNum}/>
                            <p>{footer}</p>
                        </div>
                    </div>
            </article>
        </section>
    )
}

export default Card;