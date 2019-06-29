import React from 'react';
import SupportCard from './SupportCard';
import './ReasonSupportBulletin.css';

const ReasonSupportBulletin = ({ reasonData }) => (
    <div id = 'RSB' className = ''>
        {reasonData.map((data) => {
            return <SupportCard name = {data.supporter} desc = {data.description} reason = {data.reason} date = {data.datePosted} anonymity = {data.anonymous}/>
        })}
    </div>
);

export default ReasonSupportBulletin;