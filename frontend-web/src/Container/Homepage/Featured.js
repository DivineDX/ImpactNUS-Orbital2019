import React, {Component} from 'react';
import Card from '../../Components/Card/Card';

class Featured extends Component{
	constructor(props) {
		super(props);
		this.state = {
			displayData: [],
		}
	}
	
	componentDidMount() {
		fetch("http://localhost:3001/retrieveall")
			.then(resp => resp.json())
			.then(data => {
				this.setState({displayData: data})
			});
	}

	render() {
		return (	 //acts as a card list here
			<div>
                <h1 className = 'bb b--black-10 w-70 pt4 tc center baskerville fw5'>Featured</h1>
				{this.state.displayData.map((data) => {
					return <Card
							loadedData = {data}						
							/>
				})}
			</div>
    	);
  }
}

export default Featured;