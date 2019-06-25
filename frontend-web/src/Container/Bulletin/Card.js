import React from 'react';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import Follow from './Follow';
import { Link } from 'react-router-dom';
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

    let flag = false;

    return (
        <section className="avenir">
            <article className="bb b--black-10">
                    <div className="card-container">
                        <div className="img_wrap">
                            <img src={image} className="w-100" alt="IMG" />
                        </div>
                        <div className="text_wrap">
                            <h2 className="">{title} </h2>
                            <Follow>
                                Follow
                            </Follow>
                            <p className="i pt3">{recipient}</p>
                            <p className="">
                                {description}
                                <text> </text>
                                <Link to="/LandingPage"> 
                                {/* to add links to indiv page  */}
                                <text className='readmore'> Read more </text>
                                </Link>
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