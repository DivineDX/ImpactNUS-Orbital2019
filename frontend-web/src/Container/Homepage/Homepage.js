import React, { Component } from 'react';
import BannerPage from '../../Components/BannerPage/BannerPage';
import Featured from './Featured';
import BannerPage2 from '../../Components/BannerPage2/BannerPage2';

class Homepage extends Component {

    render() {
        const {isSignedIn, loginUser} = this.props; //destructuring
        return ( //acts as a card list here
            <div>
                <BannerPage isSignedIn = {isSignedIn} loginUser = {loginUser}/>
                <BannerPage2/>
                <Featured/>
            </div>
        );
    }
}

export default Homepage;