import React from 'react';
import SupportCard from './SupportCard';
import './ReasonSupportBulletin.css';

const ReasonSupportBulletin = ({ reasonData }) => (
    <div id = 'RSB' className = ''>
        {reasonData.map((data) => {
            return <SupportCard name = {data.name} desc = {data.poster_description} reason = {data.content} date = {data.dateposted} anonymity = {data.anonymity}/>
        })}
    </div>
);

export default ReasonSupportBulletin;