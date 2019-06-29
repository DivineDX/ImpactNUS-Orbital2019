import React, { Component } from 'react';
import { Data } from '../../Data/Data';
import Card from '../../Components/Card/Card';
import FollowButton from '../../Components/Buttons/FollowButton';

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
			<div>
				<h1> Work in Progress</h1>
			</div>
		);
	}
}

export default Feed;