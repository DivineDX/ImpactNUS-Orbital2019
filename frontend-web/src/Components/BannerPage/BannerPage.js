import React from 'react';
import "./BannerPage.css";
import ButtonModal from "./ButtonModals";
import { Link } from 'react-router-dom';

const BannerPage = ({ isSignedIn, loginUser }) => {
    return (
        <article className="banner center ph3 ph5-ns tc br2 pv5 white flex flex-column justify-center">
            <h1 className="fw9 f1 f-headline-ns lh-title mt0 mb3">
                BE THE CHANGE FROM WITHIN
            </h1>
            <h2 className="fw5 f2 lh-copy mt0 mb3">
                A platform of the students, by the students, for the students.
            </h2>
            <p className="fw1 f3 mt0-ns mt4 mb3">
                Mobilize your peers and Make a difference now
            </p>
            <div>
                {isSignedIn === false
                    ? <div>
                        <ButtonModal loginProp={loginUser} buttonWord={"Start Petition"} />
                        <ButtonModal loginProp={loginUser} buttonWord={"Start Campaign"} />
                    </div>
                    : <div>
                        <Link to="/startform" className="f3 br-pill bg-dark-green no-underline white ba b--dark-green grow pv3 ph2 dib mr3">
                            Start Petition
                        </Link>
                        <Link to="/startform" className="f3 br-pill bg-dark-green no-underline white ba b--dark-green grow pv3 ph2 dib mr3">
                            Start Campaign
                        </Link>
                    </div>
                }
            </div>
        </article>
    );
}

export default BannerPage;