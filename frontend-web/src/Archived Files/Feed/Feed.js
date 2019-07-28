import React, { Component } from 'react';
import FeedCard from '../FeedCard';
const fakeData = [
	{
		pncID: 1,
		pncTitle: "Lorem Ipsum Petition",
		updateTitle: "Update 1: We have hit 100 supporters!",
		content: "Porta convallis. Integer magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.",
		datePosted: new Date(2019, 6, 30),
		imageURL: 'https://www.recycleaway.com/assets/images/product-photos/Iowa%20Rotocast/RB-1_Triple.jpg',
	},
	{
		pncID: 1,
		pncTitle: "Lorem Ipsum Campaign",
		updateTitle: "Update 1: We appreciate the support we are having!",
		content: "Porta convallis. Integer magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.",
		datePosted: new Date(2019, 6, 30),
		imageURL: "http://www.rlafoundation.org.sg/Resources/EnrichingLives/Local-and-Overseas-Projects-Main-Page.aspx?width=716&height=475",
	},
]
class Feed extends Component {
	render() {
		return (	 //acts as a card list here
			<div className='ma5'>
				<h1 className='baskerville fw5'>Feed</h1>
				{
					fakeData.map(data => {
						return <FeedCard loadedData = {data}/>
					})
				}
			</div>
		);
	}
}

export default Feed;