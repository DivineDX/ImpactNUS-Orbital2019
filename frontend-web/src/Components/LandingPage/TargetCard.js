import React from 'react';

const TargetCard = ({name}) => {
    return (
        <div className = 'bg-light-gray shadow-5 tc pa3 grow dib pa4 mh3'>
            <p className = 'fw9'>
                <strong>{name}</strong>
            </p>
        </div>
    );
}

export default TargetCard;