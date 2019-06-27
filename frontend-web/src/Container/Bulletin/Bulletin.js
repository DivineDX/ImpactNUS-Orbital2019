import React, { Component } from 'react';
import { Data } from '../../Data/Data';
import Card from '../../Components/Card/Card';
import BulletinMenuBar from './BulletinMenuBar';
import "./Bulletin.css";
import FollowButton from '../../Components/Buttons/FollowButton';

class Bulletin extends Component {
	constructor() {
		super()
		this.state = {
			origData: Data,
			data: Data,
			activeTab: 'all', //has all, petition and campaign
		}
	}

	handleFilterClick = (option) => {
		let filteredData = this.state.origData.filter(data => {
			if(option === 'all'){
				return data;
			}else {
				return data.type === option;
			}
		});
		this.setState({
			data: filteredData,
		});
	}

	render() {
		return (	 //acts as a card list here
			<div>
				<div className = "w-75 pt5 center">
					<h1 className="b--black-10 tc baskerville f1 fw5"> Discover Petitions and Campaigns</h1>
					<BulletinMenuBar handleFilterClick = {this.handleFilterClick}/>
				</div>

				{this.state.data.map((data, id) => {
					return <Card
						key={id}
						type={data.type}
						title={data.title}
						recipient={data.recipient}
						organizer={data.organizer}
						anonymity={data.anonymity}
						date_started={data.date_started}
						description={data.description}
						image={data.image}
						targetNum={data.targetNum}
						numSupporters={data.numSupporters}
						numFollowing={data.numFollowing}
					/>
				})}
			</div>
		);
	}
}

export default Bulletin;