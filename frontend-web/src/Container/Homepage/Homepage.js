import React, { Component } from 'react';
import BannerPage from '../../Components/Banners/BannerPage/BannerPage';
import Featured from './Featured';
import BannerPage2 from '../../Components/Banners/BannerPage2/BannerPage2';
import queryString from "query-string";

class Homepage extends Component {
    componentWillMount() {
        var query = queryString.parse(this.props.location.search);
        if (query.token) {
          window.localStorage.setItem("jwt", query.token);
          this.props.loginUser(query.token); //not secure
          this.props.history.push("/");

       }
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