import React from 'react';
import "./BannerPage2.css";
import { Icon } from 'semantic-ui-react'

const BannerPage2 = () => {
    return (
        <article className="bannerPage2 bg-blue center ph3 ph5-ns tc br2 pv5 white flex flex-column justify-center">
            <h1 className="fw9 f3 f-subheadline-ns lh-title mt0 mb3">
                Accelerating your student-led initiatives
            </h1>
            <p>
                DIAGNUS was created for the purpose of...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
            </p>
            <div className = "ph-3 mt5-ns flex flex-row-ns justify-between-ns flex-column items-center">
                <div className = 'mh2 pv4 pv0-ns mh0-ns'>
                    <Icon name='gavel' size='huge'/>
                    <h3>Decide The Cause</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
                    </p>
                </div>
                <div className = 'mh2 pv4 pv0-ns mh0-ns'>
                    <Icon name='rss' size='huge'/>
                    <h3>Raise The Support</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
                    </p>
                </div>
                <div className = 'mh2 pv4 pv0-ns mh0-ns'> 
                    <Icon name = 'winner' size ='huge'/>
                    <h3>Make Your Mark</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
                    </p>
                </div>
            </div>
        </article>
    );
}

export default BannerPage2;