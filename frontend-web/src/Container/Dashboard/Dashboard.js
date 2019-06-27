import React, { Component } from 'react';
import { Data } from "../../Data/Data";
import Card from '../../Components/Card/Card';
import DashboardDropDown from '../../Components/Dropdowns/DashboardDropDown';

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
                <div className = "w-75 pt5 center bb b--black-10">
					<h1 className="tc baskerville f1 fw5"> Your Dashboard</h1>
				</div>

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
                    >
                        <DashboardDropDown type = {data.type}/>
                    </Card>
                    })}
			</div>
    	);
  }
}

export default Dashboard;