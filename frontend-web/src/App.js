import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Bulletin from './Container/Bulletin/Bulletin';
import Dashboard from './Container/Dashboard/Dashboard';
import Feed from './Container/Feed/Feed';
import Homepage from './Container/Homepage/Homepage';
import StartForm from './Container/StartForm/StartForm';

class App extends Component {
	constructor() {
		super();
		this.state = {
			isSignedIn: false, //default is false (not signed in)
			user: '', //user's name
		}
	}

	//for testing purposes
	componentDidMount() {
		fetch("http://localhost:3001")
			.then(resp => resp.json())
			.then();
	}

	loginUser = (currUser) => {
		this.setState({ isSignedIn: true, user: currUser });
	}

	signoutUser = () => {
		this.setState({ isSignedIn: false, user: '' }); //empty user
	}

	render() {
		const isSignedIn = this.state.isSignedIn;
		let loginProp =
			(isSignedIn) ? this.signoutUser : this.loginUser;

		return (
			<Router>
				<div>
					<NavBar loginProp={loginProp} isSignedIn={isSignedIn} />
					<div className="body">
						<Switch>
							<Route path="/" exact render = {(props) => <Homepage {...props} isSignedIn = {isSignedIn} loginUser = {this.loginUser}/>}/>
							<Route path="/bulletin" component={Bulletin} />
							<Route path="/dashboard" component={Dashboard} />
							<Route path="/feed" component={Feed} />
							<Route path = "/startform" component = {StartForm} />
						</Switch>
					</div>
					<Footer/>
				</div>
			</Router>
		);
	}
}

export default App;
