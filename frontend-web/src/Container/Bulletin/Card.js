import React from 'react'; 
import ProgressBar from '../../Components/ProgressBar/ProgressBar';

const Card = ({key, type, date_started, header, title, description, organizer, image, numSupporters, targetNum, numLikes}) => { //Destructuring right here
    let footer = '';
    if(type === 'petition') {
        footer = numSupporters + " Signed | Target: " + targetNum; 
    }else { //campaign
        footer = numSupporters + " Supported | Target: " + targetNum; 
    }
    
    return ( 
        <div className='bg-light-green dib br3 ma2 b--dotted bw2 shadow-5'>
            <div className = 'fl w-25'>
                <img className = 'relative' src = {image} alt = "IMG"/>
            </div>
            <div className = 'fl w-75 pl2'>
                <p className = "i">{header}</p>
                <p className = "fw7">{title}</p>
                <p>{description}</p>
                <h4>By {organizer}</h4>
                <ProgressBar/>
                <h4>{footer}</h4>
            </div>
        </div>
    )
}

export default Card;