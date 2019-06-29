import React from 'react';

const SupportCard = ({ name, desc, reason, date, anonymity}) => (
    <article class="w-100 center mh4 mv3 br3 hidden ba b--black-10">
        <div class="bg-near-white br3 br--top black-60 mv0 pv2 ph3">
            <h4 className = 'f4 b'>
                {anonymity ?  "Anoymous" : name}
            </h4>
            <p className = 'i'>{desc}</p>
        </div>
        <div class="pa3">
            <p class="f6 lh-copy">
                {reason}
            </p>
            {/* <p className = 'i'>{date.toDateString().split(' ').slice(1).join(' ')}</p> */}

        </div>
    </article>
);

export default SupportCard;