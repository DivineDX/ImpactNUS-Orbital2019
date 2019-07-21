import React, { Component } from 'react';
import BannerPage from '../../Components/Banners/BannerPage/BannerPage';
import Featured from './Featured';
import BannerPage2 from '../../Components/Banners/BannerPage2/BannerPage2';
import {attemptLogin} from '../../Auth';

class Homepage extends Component {
    componentWillMount() {
        attemptLogin(this.props.loginUser);
    }

    render() {
        const { isSignedIn } = this.props; //destructuring
        return ( //acts as a card list here
            <div>
                <BannerPage isSignedIn={isSignedIn} />
                <BannerPage2 />
                <Featured />
                {/* <Footer/> */}
            </div>
        );
    }
}

export default Homepage;