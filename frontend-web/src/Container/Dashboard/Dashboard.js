import React, { Component } from 'react';
import { Data } from "../../Data/Data";
import Card from './Card';
import './Dashboard.css';

class Dashboard extends Component {
    constructor() {
		super() 
		this.state = {
			Data: Data,
		}
	}

    render() {
        return (	 //acts as a card list here
			<div>
                <h1> Your Dashboard</h1>
                {this.state.Data.map((data, id) => {
                    return <Card
                        key = {id}
                        type = {data.type}
                        title = {data.title}
                        recipient = {data.recipient}
                        organizer = {data.organizer}
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

export default Dashboard;