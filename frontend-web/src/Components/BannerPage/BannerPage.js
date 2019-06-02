import React from 'react';
import "./BannerPage.css";

const BannerPage = () => {
    return (
        <article className="banner center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green flex flex-column justify-center">
            <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
                BE THE CHANGE FROM WITHIN
            </h1>
            <h2 className="fw2 f4 lh-copy mt0 mb3">
                A platform of the students, by the students, for the students.
            </h2>
            <p className="fw1 f5 mt0 mb3">
                Mobilize your peers and Make a difference now
            </p>
            <div>
                <a className="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3"
                    href="#0">
                    Start Petition
                </a>
                <a className="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib"
                    href="#0">
                    Start Campaign
                </a>
            </div>
        </article>
    );
}

export default BannerPage;