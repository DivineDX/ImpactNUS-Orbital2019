import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
import ProtectedRoute from './ProtectedRoute';

class App extends Component {
	constructor() {
		super();
		this.state = {
			isSignedIn: true, //default is false (not signed in)
			userID: 'e0322822', //userID
		}
	}

	isSignedIn = () => {
		return this.state.isSignedIn;
	}

	loginUser = (userID) => {
		this.setState({
			isSignedIn: true,
			userID: userID,
		});
	}

	signoutUser = () => {
		this.setState({ isSignedIn: false, userID: '', }); //empty user		
	}

	render() {
		const isSignedIn = this.state.isSignedIn;
		let loginProp =
			(isSignedIn) ? this.signoutUser : this.loginUser;

		return (
			<BrowserRouter>
				<div>
					<NavBar loginProp={loginProp} isSignedIn={isSignedIn} />
					<div className="body">
						<Switch>
							<Route path="/" exact render={(props) => <Homepage {...props} isSignedIn={isSignedIn} />} />
							<Route path="/login" exact render={(props) => <LoginPage {...props} isSignedIn={isSignedIn} loginUser={this.loginUser} />} />
							<Route path="/bulletin" exact component={Bulletin} />
							<ProtectedRoute path="/dashboard" component = {Dashboard} userID={this.state.userID} isSignedIn = {isSignedIn}/>
							<ProtectedRoute path="/feed" component={Feed} isSignedIn = {isSignedIn}/>
							<Route path="/startform" render={(props) => <Form {...props} isEditing={false} userID={this.state.userID}/>} />
							<Route path="/about" component={About} />
							<Route path="/howitworks" component={HowItWorks} />
							<Route path="/faq" component={FAQ} />
							<Route path="/contactus" component={ContactUs} />
							<Route path="/pg/:id" render={(props) => <LandingPage {...props} userID={this.state.userID}/>} />
							<Route path="*" component={NonExistentPage} /> 
						</Switch>
					</div>
					{/* <Footer/> */}
				</div>
			</BrowserRouter>
		);
	}
}

export default App;