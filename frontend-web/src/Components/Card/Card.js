import React from 'react';
import { Link } from 'react-router-dom'
import './Card.css';
import wireframeImage from '../../Images/wireframeImage.png';
import { Image, Progress } from 'semantic-ui-react';

const Card = (props) => {
    const loadedData = props.loadedData;
    //unsued const: date_started,date_end,  description, numFollowing, finished, tags
    const { id, type, title, recipient, name, anonymity, imageurl, targetnumsupporters, currnumsupporters } = loadedData;
    let footer = '';
    let sub = '';

    if (type === 'petition') {
        footer = currnumsupporters + " Signed | Target: " + targetnumsupporters;
        sub = "Petition to: " + recipient;
    } else { //campaign
        footer = currnumsupporters + " Supported | Target: " + targetnumsupporters;
        sub = "Reaching out to: " + recipient;
    }

    let displayedOrganizer = '';
    if (anonymity) {
        displayedOrganizer = "Anonymous";
    } else {
        displayedOrganizer = name;
    }

    return (
        <div className="avenir card-container shadow-4">
            <Image
                fluid
                label={{ as: 'a', color: 'black', content: 'Hotel', icon: 'hotel', ribbon: true }}
                src={imageurl}
                onError={(e) => { e.target.onerror = null; e.target.src = wireframeImage }}
                alt="Error" className="w-100" id="cardImage"
            />
            <div id="contentWrap">
                <div className="text_wrap flex flex-row">
                    <h3 className="w-80">
                        <Link to={`/pg/${id}`}>
                            {title}
                        </Link>
                    </h3>
                    <div className="w-20">{props.children}</div>
                </div>
                <div id="descriptionWrap">
                    <p className="i pt3">{sub}</p>
                    <p className="b"> Initiated by: {displayedOrganizer}</p>
                    <Progress color='teal' size='small' value={currnumsupporters} total={targetnumsupporters} />
                    <p>{footer}</p>
                </div>

            </div>
        </div>
    )
}

export default Card;