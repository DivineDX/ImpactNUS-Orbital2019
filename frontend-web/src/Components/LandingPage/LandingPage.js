import React, { Component } from 'react';
import { Data } from '../../Data/Data';
import ProgressBar from '../ProgressBar/ProgressBar';
import TargetCard from './TargetCard';
import { Button } from 'semantic-ui-react'

const fakeData = Data[0];

/*
    type: "petition",
    id: "1",
    title: "Petition to install more recycling bins in hostels",
    recipient: "Petition to Office of Student Affairs",
    organizer: "De Xun",
    anonymity: true,
    date_started: new Date(2019, 5, 30),
    date_end: new Date (2019, 10, 30),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ultricies ante, vitae molestie libero. In id cursus felis. Sed imperdiet vehicula ex, eget venenatis augue. Integer ornare, tellus non.",
    tags: ["Hostel Living", "Environment"],
    image: "https://www.recycleaway.com/assets/images/product-photos/Iowa%20Rotocast/RB-1_Triple.jpg",
    targetNum: 300,
    numSupporters: 130,
    numFollowing: 100,
    finished: false,
*/

class LandingPage extends Component {
    render() {
        return (
            <article className = 'tc'>
                <div className = "pv3">
                    <h1 className = 'f2 tc'> {fakeData.title}</h1>
                </div>

                <div className  = "flex flex-column pv4">
                    <img className = "pb3 bb bt ma3" src={fakeData.image} alt="IMG" />
                    <ProgressBar numSupporters={fakeData.numSupporters} targetNum={fakeData.targetNum}/>
                    <p className = "i">Signatures: <b>{fakeData.numSupporters}</b> of <b>{fakeData.targetNum}</b></p>
                </div>

                <div id="subHeader" className = "f4 flex flex-row items-center pb2">
                    <div className = 'w-80'>
                        <nobr>A {fakeData.type} by: <b>{fakeData.organizer}</b></nobr>
                        <p>Created on: {fakeData.date_started.toDateString().split(' ').slice(1).join(' ')}</p>
                    </div>
                    <div className = ''>
                        {fakeData.type === 'petition' && <Button color = 'orange' floated='right' circular>Sign Petition</Button>}
                        {fakeData.type === 'campaign' && <Button color = 'orange' floated='right' circular>Support Campaign</Button>}
                    </div>
                </div>

                <div id="description" className = 'pb3'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat elit lectus, accumsan egestas libero scelerisque at. Nullam et velit ligula. Integer quis ultrices mauris. Phasellus eget maximus purus, varius finibus nisi. Etiam aliquet malesuada erat, porta gravida lectus efficitur in. Sed vulputate et est a suscipit. Curabitur porttitor faucibus feugiat. Aenean euismod quis elit nec varius.
                    </p>
                    <p>
                        In hendrerit, lorem a pulvinar tempor, tortor libero vulputate nulla, et lacinia massa nisi sed justo. Morbi non eros metus. Ut maximus eget lorem nec tempus. Nam ipsum enim, scelerisque sed sem vitae, efficitur vestibulum quam. Aliquam ullamcorper venenatis interdum. Duis tristique lorem purus, ac molestie enim pretium vel. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                    <p>
                        Vestibulum ut faucibus ex. Sed suscipit sem ut quam pellentesque, molestie scelerisque nibh vulputate. Fusce massa arcu, dapibus in vehicula sed, ornare porttitor enim. Quisque et purus velit. Ut fringilla, augue eu egestas ultrices, sapien turpis semper dui, ac dictum nisi est ut urna. Vestibulum quis sem mattis, imperdiet sem ut, hendrerit lacus. Maecenas nisl neque, posuere in feugiat sed, iaculis quis est. Duis lobortis, massa et suscipit interdum, odio ipsum facilisis velit, sit amet placerat augue nisi et urna. Sed hendrerit eros eget felis vestibulum, quis varius enim euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper mi erat, vitae pretium nulla pretium ut. Suspendisse sodales tempor posuere. Phasellus vitae elit lorem. Nunc dapibus ante ut lectus posuere ultricies. Praesent bibendum lorem ut molestie elementum.
                    </p>
                    <p>
                        Maecenas lobortis nisl orci, nec tincidunt tellus pharetra quis. Integer a commodo magna, maximus posuere odio. Nulla facilisi. Phasellus et fermentum ex. Sed at tempor dui. In sollicitudin, tortor non venenatis malesuada, ipsum orci sodales dui, pharetra rutrum ipsum erat vitae tortor. Duis sed leo ligula. Nam maximus accumsan odio, sit amet commodo ex suscipit nec. Sed volutpat dui non elementum rhoncus. Morbi et massa fringilla, imperdiet augue eu, vehicula erat. Nam euismod sapien in metus scelerisque varius. In hac habitasse platea dictumst.
                    </p>
                </div>

                {fakeData.type === 'petition' && 
                    <div id="target" className = 'tc'>
                        <p className = 'pv2 f4 i'>This petition will be sent to:</p>
                        <TargetCard name = {fakeData.recipient}/>
                    </div>
                }

                <div id="Updates" className = 'mv5 bg-washed-green h5'>
                    <p className = 'f3'>Updates</p>
                    {/* Includes pagination and re-rendering content of updates*/}
                </div>

                <div id="Reasons" className = 'h5'>
                    <p className = 'f3'>Reasons for Support</p>
                </div>

                <div id="SupportForm" className = 'bg-washed-green h5'>
                    <p className = 'f3'> Sign this {fakeData.type}</p>
                </div>
            </article>

        );
    }
}

export default LandingPage;