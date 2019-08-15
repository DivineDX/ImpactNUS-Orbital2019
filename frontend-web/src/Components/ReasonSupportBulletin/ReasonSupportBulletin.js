import React from 'react';
import shortid from 'shortid';
import SupportCard from './SupportCard';
import './ReasonSupportBulletin.css';
import EmptySupportSegment from '../EmptyFillers/EmptySupportSegment';

const ReasonSupportBulletin = ({ reasonData }) => {
    if (reasonData.length === 0) {
        return (
            <EmptySupportSegment />
        );
    }

    else {
        return (
            <div>
                <div id='RSB' className=''>
                    {reasonData.slice(0, 8).map((data) => {
                        //8 is the maximum number to be displayed
                        return <SupportCard key = {shortid.generate()} name={data.name} desc={data.poster_description} reason={data.content} date={data.dateposted} anonymity={data.anonymity} />
                    })}
                </div>
            </div>
        );
    }
};

export default ReasonSupportBulletin;