import React from 'react';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import './Card.css';

const Card = ({ key, type, date_started, header, title, description, organizer, image, numSupporters, targetNum, numLikes }) => { //Destructuring right here
    let footer = '';
    if (type === 'petition') {
        footer = numSupporters + " Signed | Target: " + targetNum;
    } else { //campaign
        footer = numSupporters + " Supported | Target: " + targetNum;
    }

    return (
        /*<div className = "ph6">
             <article className="db bt bb b--black-10 baskerville pv4 ph7 ph0-l black">
                 <div className="flex flex-column flex-row-ns">
                     <div className="pr3-ns mb4 mb0-ns w-100 w-25-ns">
                         <img src={image} className="h-100 w-100" alt="Uploaded IMG" />
                     </div>
                     <div className=" w-100 w-70-ns pl3-ns">
                         <p className="i">{header}</p>
                         <h1 className="f4 fw8 lh-title">{title}</h1>
                         <p className="f6 f5-l lh-copy">
                             {description}
                         </p>    
                         <p className="f6 fw8 lh-copy mv0">
                             By {organizer}
                         </p>
                         <ProgressBar />
                         <p>{footer}</p>
                     </div>
                 </div>
             </article>
         </div> */

        <section class="ph7-ns center avenir">
            <article class="bt bb b--black-10">
                <a class="db pv4 ph3 ph0-l no-underline black" href="#0">
                    <div class="container flex flex-column flex-row-ns">
                        <div class="pr3-ns mb4 mb0-ns w-100 w-30-ns">
                            <img src={image} class="db h-100 w-100" alt="IMG" />
                        </div>
                        <div className="w-100 w-70-ns pl3-ns">
                            <p className="i">{header}</p>
                            <h1 className="f4 fw8 lh-title">{title}</h1>
                            <p className="f6 f5-l lh-copy">
                                {description}
                            </p>
                            <p className="f6 fw8 lh-copy mv0">
                                By {organizer}
                            </p>
                            <ProgressBar numSupporters = {numSupporters} targetNum = {targetNum}/>
                            <p>{footer}</p>
                        </div>
                    </div>
                </a>
            </article>
        </section>
    )
}

export default Card;