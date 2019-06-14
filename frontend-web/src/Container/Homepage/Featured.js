import React, {Component} from 'react';
import {Data} from '../../Data/Data';
import Card from '../Bulletin/Card';

class Featured extends Component{
	render() {
		return (	 //acts as a card list here
			<div>
                <h1 className = 'bb b--black-10 w-70 pt4 tc center baskerville fw5'>Featured</h1>
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

export default Featured;