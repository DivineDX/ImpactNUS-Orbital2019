import React from 'react'; 
import "./ProgressBar.css";
import Filler from './Filler';

const ProgressBar = ({numSupporters, targetNum}) => {
    let percentage = (numSupporters / targetNum) * 100;
    if(percentage >= 100) {
        percentage = 100;
    }
    return ( 
        // <div className="meter animate">
        //     <span style = {{width: `${percentage}%`}}></span>
        // </div>

        <div className = "progress-bar">
            <Filler percentage = {percentage}/>
        </div>
    );
}

export default ProgressBar;