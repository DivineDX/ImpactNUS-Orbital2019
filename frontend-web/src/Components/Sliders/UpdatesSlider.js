import React from 'react';
import Slider from 'react-slick';
import shortid from 'shortid';
import {DateToString} from '../DateConverter/DateToString';
import EmptyUpdates from '../EmptyFillers/EmptyUpdates';

const UpdatesSlider = ({ updateData }) => {
    if(updateData.length === 0) {
        return (
            <EmptyUpdates/>
        );
    }
    return (
        <div>
            <Slider
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={false}
                dots={true}
                arrows={false}
                className = 'ma2'
            >
                {updateData.map((data) => {
                    return <div className = 'mb2' key = {shortid.generate()}>
                        <p className = 'f4 b'>{data.title}</p>
                        <p>{data.content}</p>
                        <p className = 'i'>{DateToString(data.dateposted)}</p>
                    </div>
                })}
            </Slider>
        </div>
    );
}
    

export default UpdatesSlider;