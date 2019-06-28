import React, { Component } from 'react';
import Card from '../../Components/Card/Card';
import BulletinMenuBar from './BulletinMenuBar';
import FollowButton from '../../Components/Buttons/FollowButton';

class Bulletin extends Component {
	constructor() {
		super()
		this.state = {
			origData: [],
			filteredData: [],
		}
	}

	componentDidMount() {
		fetch("http://localhost:3001/retrievedata")
			.then(resp => resp.json())
			.then(data => {
				this.setState({
					origData: data,
					filteredData: data,
				})
			});
	}

	handleFilterClick = (option) => {
		let filteredData = this.state.origData.filter(data => {
			if (option === 'all') {
				return data;
			} else {
				return data.type === option;
			}
		});

		this.setState({
			filteredData: filteredData,
		});
	}

	render() {
		return (	 //acts as a card list here
			<div>
				<div className="w-75 pt5 center">
					<h1 className="tc baskerville f1 fw5"> Discover Petitions and Campaigns</h1>
					<BulletinMenuBar handleFilterClick={this.handleFilterClick} />
				</div>

				{this.state.filteredData.map((data, id) => {
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
						numFollowing={data.numFollowing}>
						<FollowButton />
					</Card>
				})}
			</div>
		);
	}
}

export default Bulletin;