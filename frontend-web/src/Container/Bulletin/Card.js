import React from 'react';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';

const Card = ({ key, type, date_started, header, title, description, organizer, image, numSupporters, targetNum, numLikes }) => { //Destructuring right here
    let footer = '';
    if (type === 'petition') {
        footer = numSupporters + " Signed | Target: " + targetNum;
    } else { //campaign
        footer = numSupporters + " Supported | Target: " + targetNum;
    }

    return (
        /*<div className='bg-light-green dib br3 ma2 b--dotted bw2 shadow-5'>
            <div className =  'fl w-25'>
                <img className = '' src = {image} alt = "IMG"/>
            </div>
            <div className = 'fl w-75 pl2'>
                <p className = "i">{header}</p>
                <p className = "fw7">{title}</p>
                <p>{description}</p>
                <h4>By {organizer}</h4>
                <ProgressBar/>
                <h4>{footer}</h4>
            </div>
        </div> */

        <article className="bt bb b--black-10">
            <div className="baskerville db pv4 ph3 ph0-l black">
                <div className="flex flex-column flex-row-ns">
                    <div className="pr3-ns mb4 mb0-ns w-100 w-30-ns">
                        <img src= {image} className="db h-auto"
                            alt="Uploaded IMG"/>
                    </div>
                    <div className="w-100 w-70-ns pl3-ns">
                        <p className = "i">{header}</p>
                        <h1 className="f4 fw8 lh-title">{title}</h1>
                        <p className="f6 f5-l lh-copy">
                            {description}
                        </p>
                        <p className="f6 fw8 lh-copy mv0">
                            By {organizer}
                        </p>
                        <ProgressBar/>
                        <p>{footer}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card;