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
            <div className = "ph-3 mt5 flex flex-row-ns flex-column items-center justify-between">
                <div>
                    <Icon name='gavel' size='huge' />
                    <h3>Decide on your cause</h3>
                </div>
                <div>
                    <Icon name='rss' size='huge' />
                    <h3>Raise the support</h3>
                </div>
                <div>
                    <Icon name = 'winner' size ='huge'/>
                    <h3>Induce the change</h3>
                </div>
            </div>
        </article>
    );
}

export default BannerPage2;