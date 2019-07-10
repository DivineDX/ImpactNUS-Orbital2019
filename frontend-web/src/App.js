import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import NavBar from './Container/NavBar/NavBar';
// import Footer from './Container/Footer/Footer';
import LoginPage from './Container/LoginPage/LoginPage';
import Bulletin from './Container/Bulletin/Bulletin';
import Dashboard from './Container/Dashboard/Dashboard';
import Feed from './Container/Feed/Feed';
import About from './Components/FooterItems/About/About';
import HowItWorks from './Components/FooterItems/HowItWorks/HowItWorks';
import FAQ from './Components/FooterItems/FAQ/FAQ';
import ContactUs from './Components/FooterItems/ContactUs/ContactUs';
import Homepage from './Container/Homepage/Homepage';
import Form from './Container/StartForm/Form';
import LandingPage from './Components/LandingPage/LandingPage';
import NonExistentPage from './Container/NonExistentPage/NonExistentPage';

class App extends Component {
	constructor() {
		super();
		this.state = {
			isSignedIn: false, //default is false (not signed in)
			userID: '', //userID
			username: '',
		}
	}

	retrieveUserInfo = () => {
		if (this.state.isSignedIn) {
			return {
				userID: this.state.userID,
				username: this.state.username,
			}
		}
	}

	loginUser = (userID, username) => {
		this.setState({
			isSignedIn: true,
			userID: userID,
			username: username
		});
	}

	signoutUser = () => {
		this.setState({ isSignedIn: false, userID: '', username: '', }); //empty user
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
							<Route path="/" exact render={(props) => <Homepage {...props} isSignedIn={isSignedIn} />} />
							<Route path="/login" exact render={(props) => <LoginPage {...props} isSignedIn={isSignedIn} loginUser={this.loginUser} />} />
							<Route path="/bulletin" component={Bulletin} />
							<Route path="/dashboard" exact render={(props) => <Dashboard {...props} userID={this.state.userID} />} />
							<Route path="/feed" component={Feed} />
							<Route path="/startform" render={(props) => <Form {...props} isEditing={false} userID={this.state.userID} username={this.state.username} />} />
							<Route path="/updatemodal" render={(props) => <Form {...props} isEditing={false} />} />
							<Route path="/about" component={About} />
							<Route path="/howitworks" component={HowItWorks} />
							<Route path="/faq" component={FAQ} />
							<Route path="/contactus" component={ContactUs} />
							<Route path="/pg/:id" render={(props) => <LandingPage {...props} userID={this.state.userID} username={this.state.username} />} />
							<Route path="/editform" render={(props) => <Form {...props} isEditing={true} userID={this.state.userID} username={this.state.username} />} />
							<Route path="*" component={NonExistentPage} />
						</Switch>
					</div>
					{/* <Footer/> */}
				</div>
			</Router>
		);
	}
}

export default App;