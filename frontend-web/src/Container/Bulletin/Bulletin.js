import React, {Component} from 'react';
import {Data} from '../../Data/Data';
import Card from './Card';

class Bulletin extends Component{
	render() {
		return ( //acts as a card list here
			<div>
                <h1 className = 'tc center baskerville fw1 ph3 ph0-l'>Bulletin</h1>
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