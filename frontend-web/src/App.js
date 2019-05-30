import React, {Component} from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import BannerPage from './Components/BannerPage/BannerPage';
class App extends Component{
	render() {
		return (
			<div>
				<NavBar/>
				<BannerPage/>
				{/* <Bulletin/> */}
			</div>
    	);
  }
}

export default App;
