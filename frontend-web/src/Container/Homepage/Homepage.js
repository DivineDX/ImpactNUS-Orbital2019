import React, { Component } from 'react';
import BannerPage from '../../Components/BannerPage/BannerPage';
import Featured from './Featured';
import BannerPage2 from '../../Components/BannerPage2/BannerPage2';

class Homepage extends Component {
    render() {
        return ( //acts as a card list here
            <div>
                <BannerPage />
                <BannerPage2/>
                <Featured />
            </div>
        );
    }
}

export default Homepage;