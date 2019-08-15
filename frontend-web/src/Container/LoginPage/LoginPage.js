import React from 'react';
import { Button } from 'semantic-ui-react'
import './LoginPage.css';
import url from '../../Configs/url';

const LoginPage = (props) => {
    const hrefURL = `https://${url.fetchURL}/auth/nus`;
    return (
        <div className='' id=''>
            <div className="w-75 pt5 flex flex-column items-center center">
                <h1 className="tc baskerville f1 fw5">Login Page</h1>
                <div className = "tc baskerville f4 mb4">
                    <p>ImpactNUS is a website designed for exclusive use by NUS Students and Staff. Please login using your NUS account to continue</p>
                </div>
                <Button><a href = {hrefURL}>NUS OpenID Login</a></Button>
            </div>
        </div>
    );
}


export default LoginPage;