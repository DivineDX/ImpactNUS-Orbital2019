import React, { Component } from 'react';
import BannerPage from '../../Components/BannerPage/BannerPage';
import Bulletin from '../Bulletin/Bulletin';

class Homepage extends Component {
    render() {
        return ( //acts as a card list here
            <div>
                <BannerPage />
                <Bulletin />
            </div>
        );
    }
}

export default Homepage;