import React, { Component } from 'react';
import FeaturedCard from '../../Components/Card/FeaturedCard';
import './Featured.css'

class Featured extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayData: [],
		}
	}

	componentDidMount() {
		fetch("http://fathomless-ocean-65423.herokuapp.com/retrieveall")
			.then(resp => resp.json())
			.then(data => {
				this.setState({ displayData: data })
			});
	}

	render() {
		return (	 //acts as a card list here
			<div>
				<h1 className='bb b--black-10 w-70 pt4 tc center baskerville fw5'>Featured</h1>
				<div id='cardd'>
					{this.state.displayData.map((data) => {
						return <FeaturedCard
							loadedData={data}
						/>
					})}
				</div>
			</div>
		);
	}
}

export default Featured;