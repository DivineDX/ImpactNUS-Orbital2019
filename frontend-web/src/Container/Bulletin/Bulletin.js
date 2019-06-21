import React, {Component} from 'react';
import _ from 'lodash';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Data } from '../../Data/Data';
import Card from './Card';
import "./Bulletin.css";  

class Bulletin extends Component{
	state = { activeItem: 'Petition'}

  	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	
	render() {
		const { activeItem } = this.state
		return (	 //acts as a card list here
			<div>
				<div className='help'>
                <h1 className = "bb b--black-10 w-70 pt4 tc center baskerville fw5 heading"> Discover Petitions and Campaigns</h1>
				</div>
			<div className='miniHeader'>
				<Menu.Item name='Petition' active={activeItem === 'Petition'} onClick={this.handleItemClick} className='headerElem'>
					<Link to= '/'> Petition </Link>
				</Menu.Item>
				<Menu.Item name='Campaign' active={activeItem === 'Campaign'} onClick={this.handleItemClick} className='headerElem'>
					<Link to= '/'> Campaign </Link>	
				</Menu.Item>
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
				
			{Data.map((data, id) => {
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