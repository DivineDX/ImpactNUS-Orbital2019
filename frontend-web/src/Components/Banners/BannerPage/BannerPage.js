import React from 'react';
import "./BannerPage.css";
import { Link } from 'react-router-dom';

const BannerPage = ({ isSignedIn }) => {
    return (
        <article className="banner center ph3 ph5-ns tc br2 pv5 white flex flex-column justify-center">
            <h1 className="fw9 f-headline lh-title mt0 mb3" id='OrbitronF'>
                ImpactNUS
            </h1>
            <h2 className="fw5 f1 lh-copy mt0 mb3">
                Mobilize your peers | Make the difference
            </h2>
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