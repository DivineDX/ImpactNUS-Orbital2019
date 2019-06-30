import React, { Component } from 'react';
import Card from '../../Components/Card/Card';
import BulletinMenuBar from './BulletinMenuBar';
import FollowButton from '../../Components/Buttons/FollowButton';
import {DateSort} from '../../Components/DateConverter/DateSort';

class Bulletin extends Component {
	constructor() {
		super()
		this.state = {
			filter: 'all', //Enums: all, petitions and campaigns
			category: 'Popular', //Popular, Recent and Victories
			origData: [],
		}
	}

	componentDidMount() {
		fetch("http://localhost:3001/retrieveall")
			.then(resp => resp.json())
			.then(data => {
				this.setState({
					origData: data,
				});
			});
	}

	filterData = (arr, filter) => { //all, petition or campaign
		return arr.filter(data => {
			if (filter === 'all') {
				return data;
			} else { //petition or campaign
				return data.type === filter;
			}
		});
	}

	selectCategory = (arr, cat) => {
		if (cat === 'Popular') {
			// console.log("Popular Running");
			return arr.sort((a, b) => b.numSupporters - a.numSupporters);
		} else if (cat === 'Recent') {
			return arr.sort((a,b) => DateSort(a.date_started,b.date_started));
		} else if (cat === 'Victories') {
			return arr.filter(data => data.finished === true);
		}
	}

	handleFilterClick = (filter) => {
		this.setState({ filter: filter });
	}

	handleCategoryClick = (cat) => { //Only for Popular and Recent (Sorting, not filtering)
		this.setState({ category: cat });
	}

	render() {
		const displayedData = this.selectCategory(this.filterData(this.state.origData, this.state.filter), this.state.category);
		return (	 //acts as a card list here
			<div>
				<div className="w-75 pt5 center">
					<h1 className="tc baskerville f1 fw5"> Discover Petitions and Campaigns</h1>
					<BulletinMenuBar
						handleFilterClick={this.handleFilterClick}
						handleCategoryClick={this.handleCategoryClick}
					/>
				</div>

				{displayedData.map((data) => {
					return <Card
						loadedData={data}>
						<FollowButton />
					</Card>
				})}
			</div>
		);
	}
}

export default Bulletin;