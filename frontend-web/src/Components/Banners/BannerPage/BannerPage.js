import React from 'react';
import "./BannerPage.css";
import { Link } from 'react-router-dom';

const BannerPage = ({ isSignedIn}) => {
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
                        <Link to={"/login"} className="pillButton grow">
                            Start Petition
                        </Link>
                        <Link to={"/login"} className="pillButton grow">
                            Start Campaign
                        </Link>
                    </div>
                    : <div>
                        <Link to={{
                            pathname: "/startform",
                            state: {
                                predefinedType: 'petition'
                            }
                        }}
                            className="pillButton grow">
                            Start Petition
                        </Link>
                        <Link to={{
                            pathname: "/startform",
                            state: {
                                predefinedType: 'campaign'
                            }
                        }}
                            className="pillButton grow">
                            Start Campaign
                        </Link>
                    </div>
                }
            </div>
        </article>
    );
}

export default BannerPage;