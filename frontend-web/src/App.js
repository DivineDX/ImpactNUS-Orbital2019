import React, { Component } from 'react';
import Modal from 'react-modal';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import BannerPage from './Components/BannerPage/BannerPage';
import Bulletin from './Container/Bulletin/Bulletin';

Modal.setAppElement('#root');

class App extends Component {
	
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
