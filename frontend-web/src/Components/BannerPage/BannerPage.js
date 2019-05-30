import React from 'react';

const BannerPage = () => {
    return (
        <article class="center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb5">
            <h1 class="fw6 f3 f2-ns lh-title mt0 mb3">
                BE THE CHANGE FROM WITHIN
            </h1>
            <h2 class="fw2 f4 lh-copy mt0 mb3">
                This will change things. And we want you to be involved. This text needs to
                be longer for testing sake.
            </h2>
            <p class="fw1 f5 mt0 mb3">
                Make a difference now
            </p>
            <div>
                <a class="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3"
                    href="#0">
                    Start Petition
                </a>
                <a class="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib"
                    href="#0">
                    Start Campaign
                </a>
            </div>
        </article>
    );
}

export default BannerPage;