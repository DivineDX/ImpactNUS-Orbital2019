import React, {Component} from 'react';
import { Button, Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Data } from '../../Data/Data';
import Card from './Card';
import "./Bulletin.css";  

class Bulletin extends Component{
	constructor() {
		super() 
		this.state = {
			Data: Data,
			activeItem: 'petition'
		}
	}

	handleItemClick = ({ name }) => this.setState({ activeItem: name })

	petitionClickChange = () => {
		this.setState({Data: this.state.Data.filter(data => {
			return data.type === 'petition';
		})});
		this.setState({activeItem: 'petition'});
	}
	
	campaignClickChange = () => {
		this.setState({Data: this.state.Data.filter(data => {
			return data.type === 'campaign';
		})});
		this.setState({activeItem: 'campaign'});
	}

	render() {
		const { activeItem } = this.state.activeItem;
		return (	 //acts as a card list here
			<div>
				<div className='help'>
                <h1 className = "bb b--black-10 w-70 pt4 tc center baskerville fw5 heading"> Discover Petitions and Campaigns</h1>
				</div>
			<div className='miniHeader'>
				<Button.Group>
					<Button name='petition' toggle active={activeItem === 'petition'} onClick={() => this.petitionClickChange()} className='headerElem'>
						Petition
					</Button>
					<Button name='campaign' toggle active={activeItem === 'campaign'} onClick={() => this.campaignClickChange()} className='headerElem'>
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
			</div>
				
			{this.state.Data.map((data, id) => {
				return <Card
					key = {id}
					type = {data.type}
					title = {data.title}
					recipient = {data.recipient}
					organizer = {data.organizer}
					anonymity = {data.anonymity}
					date_started = {data.date_started}
					description = {data.description}
					image = {data.image}
					targetNum = {data.targetNum}
					numSupporters = {data.numSupporters}
					numFollowing = {data.numFollowing}							
				/>
				})}
			</div>
    	);
  }
}

export default Bulletin;