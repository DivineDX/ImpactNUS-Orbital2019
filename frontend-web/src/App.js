import React, {Component} from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import BannerPage from './Components/BannerPage/BannerPage';
import Bulletin from './Container/Bulletin/Bulletin';
import {Data} from './Data';

class App extends Component{

	componentDidMount() {
		console.log(Data);
	}

	render() {
		return (
			<div>
				<NavBar/>
				<BannerPage/>
				<Bulletin/>
			</div>
    	);
  }
}

export default App;
