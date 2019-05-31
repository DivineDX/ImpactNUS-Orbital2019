import React, {Component} from 'react';
import {Data} from '../../Data/Data';
import Card from './Card';

class Bulletin extends Component{

	render() {
		return ( //acts as a card list here
			<div>
                <h1>Bulletin</h1>
				{Data.map((data, id) => {
					return <Card
							key = {id}
							type = {data.type}
							date_started = {data.date_started}
							header = {data.header}
							title = {data.title}
							description = {data.description}
							organizer = {data.organizer}
							image = {data.image}
							numSupporters = {data.numSupporters}
							targetNum = {data.targetNum}
							numLikes = {data.numLikes}							
							/>
				})}
			</div>
    	);
  }
}

export default Bulletin;