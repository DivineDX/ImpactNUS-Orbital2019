import React, {Component} from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import BannerPage from './Components/BannerPage/BannerPage';
import Bulletin from './Container/Bulletin/Bulletin';

class App extends Component{

	componentDidMount() {
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
