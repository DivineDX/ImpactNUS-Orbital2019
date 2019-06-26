import React, { Component } from 'react';
import { Button, Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Data } from '../../Data/Data';
import Card from './Card';
import BulletinMenuBar from './BulletinMenuBar';
import "./Bulletin.css";

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

	/* petitionClickChange = () => {
		this.setState({
			data: this.state.data.filter(data => {
				return data.type === 'petition';
			})
		});
		this.setState({ activeTab: 'petition' });
	}

	campaignClickChange = () => {
		this.setState({
			data: this.state.data.filter(data => {
				return data.type === 'campaign';
			})
		});
		this.setState({ activeTab: 'campaign' });
	} */

	render() {
		const { activeTab } = this.state.activeTab;
		return (	 //acts as a card list here
			<div>
				<div className = "w-75 pt5 center">
					<h1 className="b--black-10 tc baskerville f1 fw5"> Discover Petitions and Campaigns</h1>
					<BulletinMenuBar handleFilterClick = {this.handleFilterClick}/>
				</div>
				{/* <div className='miniHeader'>
				<Button.Group>
					<Button name='petition' toggle active={activeTab === 'petition'} onClick={() => this.petitionClickChange()} className='headerElem'>
						Petition
					</Button>
					<Button name='campaign' toggle active={activeTab === 'campaign'} onClick={() => this.campaignClickChange()} className='headerElem'>
						Campaign
					</Button>
				</Button.Group>
				<Dropdown text='Sort' pointing className='link item'>
				<Dropdown.Menu>
					<Dropdown.Item> 
						<Link to="/" className = "dropitem"> Popularity </Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link to="/" className = "dropitem"> Featured </Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link to="/" className = "dropitem"> Recent </Link>
					</Dropdown.Item>
				</Dropdown.Menu>
				</Dropdown>
			</div> */}
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