import React, { Component } from 'react';
import Card from '../../Components/Card/Card';
import BulletinMenuBar from './BulletinMenuBar';
import FollowButton from '../../Components/Buttons/FollowButton';
import { DateSort } from '../../Components/DateConverter/DateSort';
import { Button } from 'semantic-ui-react'

class Bulletin extends Component {
	constructor() {
		super()
		this.state = {
			filter: 'all', //Enums: all, petitions and campaigns
			category: 'Popular', //Popular, Recent and Victories
			origData: [],
			visible: 3,
		}
	}

	componentDidMount() {
		fetch("http://localhost:3001/retrieveall")
			.then(resp => resp.json())
			.then(data => {
				this.setState({
					origData: data,
				});
			}).catch(error => {
				console.log(error);
			})
	}

	loadMore = () => {
		this.setState({
			visible: (this.state.visible) + 3,
		})
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
			return arr.sort((a, b) => b.numSupporters - a.numSupporters);
		} else if (cat === 'Recent') {
			return arr.sort((a, b) => DateSort(a.date_started, b.date_started));
		} else if (cat === 'Victories') {
			return arr.filter(data => data.finished === true);
		}
	}

	handleFilterClick = (filter) => {
		this.setState({ visible: 3, filter: filter });
	}

	handleCategoryClick = (cat) => { //Only for Popular and Recent (Sorting, not filtering)
		this.setState({ visible: 3, category: cat });
	}

	render() {
		const displayedData = this.selectCategory(this.filterData(this.state.origData, this.state.filter), this.state.category);
		return (
			<div>
				<div className="w-75 pt5 center">
					<h1 className="tc baskerville f1 fw5"> Discover Petitions and Campaigns</h1>
					<BulletinMenuBar
						handleFilterClick={this.handleFilterClick}
						handleCategoryClick={this.handleCategoryClick}
					/>
				</div>

				{displayedData.slice(0, this.state.visible).map((data) => {
					return <Card
						loadedData={data}>
						<FollowButton />
					</Card>
				})}

				{this.state.visible < displayedData.length &&
					<div className='flex justify-center'>
						<Button
							onClick={() => this.loadMore()}
							size='large' color='blue' className='w-40 f5'>
							See More
						</Button>
					</div>
				}

			</div>
		);
	}
}

export default Bulletin;