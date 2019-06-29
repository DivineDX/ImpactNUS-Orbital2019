import React, { Component } from 'react';
import { Data } from '../../Data/Data';

class Feed extends Component {
	constructor() {
		super()
		this.state = {
			origData: Data,
			data: Data,
		}
	}

	render() {
		return (	 //acts as a card list here
			<div className = 'ma5 tc'>
				<h1 className = 'baskerville fw5'> Work in Progress</h1>
			</div>
		);
	}
}

export default Feed;