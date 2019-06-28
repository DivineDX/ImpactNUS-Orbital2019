import React, { Component } from 'react';
import BannerPage from '../../Components/BannerPage/BannerPage';
import Featured from './Featured';
import BannerPage2 from '../../Components/BannerPage2/BannerPage2';
// import Footer from '../Footer/Footer'

class Homepage extends Component {

    render() {
        const {isSignedIn, loginUser} = this.props; //destructuring
        return ( //acts as a card list here
            <div>
                <BannerPage isSignedIn = {isSignedIn} loginUser = {loginUser}/>
                <BannerPage2/>
                <Featured/>
                {/* <Footer/> */}
            </div>
        );
    }
}

export default Homepage;