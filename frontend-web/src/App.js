import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import BannerPage from './Components/BannerPage/BannerPage';
import Bulletin from './Container/Bulletin/Bulletin';

const adminLogin = { //what we will use to test login
	username: 'admin',
	password: '123',
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			route: 'home',
			isSignedIn: false, //default is not signed in
		}
	}
	render() {
		return (
			<div>
				<NavBar/>
				<div className="body">
					<BannerPage />
					<Bulletin />
				</div>
			</div>
		);
	}
}

export default App;
