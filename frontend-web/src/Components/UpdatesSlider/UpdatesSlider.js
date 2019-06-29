import React from 'react';
import Slider from 'react-slick';

const UpdatesSlider = ({ updateData }) => (
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
                return <div className = 'mb2'>
                    <p className = 'f4 b'>{data.title}</p>
                    <p>{data.content}</p>
                    {/* <p className = 'i'>{data.datePosted.toDateString().split(' ').slice(1).join(' ')}</p> */}
                </div>
            })}

        </Slider>
    </div>
);

export default UpdatesSlider;