import React, { Component } from 'react';
import BannerPage from '../../Components/Banners/BannerPage/BannerPage';
// import Featured from './Featured';
// import BannerPage2 from '../../Components/Banners/BannerPage2/BannerPage2';

class Homepage extends Component {
    render() {
        const { isSignedIn } = this.props; //destructuring
        return ( //acts as a card list here
            <div>
                <BannerPage isSignedIn = {isSignedIn}/>
            </div>
        );
    }
}

export default Homepage;