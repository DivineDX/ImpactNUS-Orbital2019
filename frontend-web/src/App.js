import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import BannerPage from './Components/BannerPage/BannerPage';
import Bulletin from './Container/Bulletin/Bulletin';

class App extends Component {
	constructor() {
		super();
		this.state = {
			route: 'home', //keeps track of where we are on the page
			isSignedIn: false, //default is false (not signed in)
			user: '', //user's name
		}
	}

	loginUser = (currUser) => {
		this.setState({isSignedIn: true, user: currUser});
	}

	signoutUser = () => {
		this.setState({isSignedIn: false, user: ''}); //empty user
	}

	render() {
		const {route, isSignedIn} = this.state;
		let loginProp = 
			(isSignedIn) ? this.signoutUser : this.loginUser;

		return (
			<div>
				<NavBar loginProp = {loginProp} isSignedIn = {isSignedIn}/>
				<div className="body">
					<BannerPage />
					<Bulletin />
				</div>
			</div>
		);
	}
}

export default App;
