import React, { Component } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import TargetCard from './TargetCard';
import SupportForm from './SupportForm';
import ReasonSupportBulletin from '../ReasonSupportBulletin/ReasonSupportBulletin';
import { Button } from 'semantic-ui-react'
import UpdatesSlider from '../UpdatesSlider/UpdatesSlider';
import '../../Container/NonExistentPage/NonExistentPage';
import './LandingPage.css';
import NonExistentPage from '../../Container/NonExistentPage/NonExistentPage';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notFound: true,
            loadedData: {},
            loadedUpdateData: [],
            loadedSupportData: [],
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch(`http://localhost:3001/retrieve/${id}`)
            .then(resp => {
                if (resp.status === 200) { //data is loaded
                    this.setState({ notFound: false });
                }
                return resp.json();
            })
            .then(data => {
                this.setState({ loadedData: data });
            });

        fetch(`http://localhost:3001/updatesdata/${id}`)
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                this.setState({ loadedUpdateData: data });
            });

        fetch(`http://localhost:3001/reasonssupport/${id}`)
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                this.setState({ loadedSupportData: data });
            });
    }

    render() {
        const { type, title, recipient, organizer, anonymity, date_started, date_end, description, tags, image, targetNum, numSupporters, numFollowing, finished } = this.state.loadedData;

        if (this.state.notFound) {
            return (
                <NonExistentPage />
            )
        } else {
            return (
                <article id='landingPage' className='tc'>
                    <div className="pv3">
                        <h1 className='f2 tc'> {title}</h1>
                    </div>

                    <div id="subHeader" className='pv2 flex flex-column items-center'>
                        <img className="pb3 ma3" id='pageImage' src={image} alt="IMG" />
                        <div className=''>
                            <ProgressBar numSupporters={numSupporters} targetNum={targetNum} />
                            <p className="i">Signatures: <b>{numSupporters}</b> of <b>{targetNum}</b></p>
                            <div id="subContainer" className='flex flex-row items-center'>
                                <div className='w-60 tl'>
                                    <nobr>By: <b>{organizer}</b></nobr>
                                    {/* <p>Created on: {date_startedtoDateString().split(' ').slice(1).join(' ')}</p> */}
                                </div>
                                <div className='w-40'>
                                    {type === 'petition'
                                        ? <Button color='orange' floated='right' circular>Sign Petition</Button>
                                        : <Button color='orange' floated='right' circular>Support Campaign</Button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="description" className='pa3 mv3'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat elit lectus, accumsan egestas libero scelerisque at. Nullam et velit ligula. Integer quis ultrices mauris. Phasellus eget maximus purus, varius finibus nisi. Etiam aliquet malesuada erat, porta gravida lectus efficitur in. Sed vulputate et est a suscipit. Curabitur porttitor faucibus feugiat. Aenean euismod quis elit nec varius.
                    </p>
                        <p>
                            In hendrerit, lorem a pulvinar tempor, tortor libero vulputate nulla, et lacinia massa nisi sed justo. Morbi non eros metus. Ut maximus eget lorem nec tempus. Nam ipsum enim, scelerisque sed sem vitae, efficitur vestibulum quam. Aliquam ullamcorper venenatis interdum. Duis tristique lorem purus, ac molestie enim pretium vel. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                        <p>
                            Vestibulum ut faucibus ex. Sed suscipit sem ut quam pellentesque, molestie scelerisque nibh vulputate. Fusce massa arcu, dapibus in vehicula sed, ornare porttitor enim. Quisque et purus velit. Ut fringilla, augue eu egestas ultrices, sapien turpis semper dui, ac dictum nisi est ut urna. Vestibulum quis sem mattis, imperdiet sem ut, hendrerit lacus. Maecenas nisl neque, posuere in feugiat sed, iaculis quis est. Duis lobortis, massa et suscipit interdum, odio ipsum facilisis velit, sit amet placerat augue nisi et urna. Sed hendrerit eros eget felis vestibulum, quis varius enim euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper mi erat, vitae pretium nulla pretium ut. Suspendisse sodales tempor posuere. Phasellus vitae elit lorem. Nunc dapibus ante ut lectus posuere ultricies. Praesent bibendum lorem ut molestie elementum.
                    </p>
                    </div>

                    {type === 'petition' &&
                        <div id="target" className='tc mv3'>
                            <p className='pv2 f4 i'>This petition will be sent to:</p>
                            <TargetCard name={recipient} />
                        </div>
                    }

                    <div id="Updates" className='pv4 ph2 bg-washed-green'>
                        <p className='f3'>
                            Updates
                        <hr className='mw4 bb bw1 b--black-10'></hr>
                        </p>
                        <UpdatesSlider updateData = {this.state.loadedUpdateData}/>
                    </div>

                    <div id="Reasons" className='pv3 ph2'>
                        <p className='f3'>
                            Reasons for Support
                        <hr className='mw5 bb bw1 b--black-10'></hr>
                        </p>
                        <ReasonSupportBulletin reasonData={this.state.loadedSupportData} />
                        <button className="landing-button">See All</button>
                    </div>

                    <div id="SupportForm" className='pv3 ph2 bg-washed-green'>
                        <p className='f3'>
                            Sign this {type}
                            <hr className='mw5 bb bw1 b--black-10'></hr>
                        </p>
                        <SupportForm />
                    </div>

                </article>
            );
        }
    }
}

export default LandingPage;