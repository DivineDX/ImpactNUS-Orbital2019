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
        // <section class="ph7-ns ph3-m center avenir">
        //     <article class="bt bb b--black-10">
        //         <a class="db pv4 ph3 ph0-l no-underline black" href="#0">
        //             <div class="container flex flex-column-m flex-row-ns">
        //                 <div class="pr3-ns mb4 mb0-ns w-100 w-30-ns">
        //                     <img src={image} class="db h-100 w-100" alt="IMG" />
        //                 </div>
        //                 <div className="w-100 w-70-ns pl3-ns">
        //                     <p className="i">{header}</p>
        //                     <h1 className="f4 fw8 lh-title">{title}</h1>
        //                     <p className="f6 f5-l lh-copy">
        //                         {description}
        //                     </p>
        //                     <p className="f6 fw8 lh-copy mv0">
        //                         By {organizer}
        //                     </p>
        //                     <ProgressBar numSupporters = {numSupporters} targetNum = {targetNum}/>
        //                     <p>{footer}</p>
        //                 </div>
        //             </div>
        //         </a>
        //     </article>
        // </section>
        <section className="avenir">
            <article className="bt bb b--black-10">
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