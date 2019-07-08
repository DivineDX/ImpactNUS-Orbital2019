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
import { DateToString } from '../DateConverter/DateToString';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notFound: true,
            id: '',
            loadedData: {},
            loadedUpdateData: [],
            loadedSupportData: [],
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({ id: id });
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

    refreshSupportData() {
        fetch(`http://localhost:3001/reasonssupport/${this.state.id}`)
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                this.setState({ loadedSupportData: data });
            });
    }

    render() {
        //unused consts: date-end, tags, numFollowing, finished
        const { type, title, recipient, name, anonymity, date_started, description, imageurl, targetnumsupporters, currnumsupporters } = this.state.loadedData;
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
                        <img className="pb3 ma3" id='pageImage' src={imageurl} alt="IMG" />
                        <div className=''>
                            <ProgressBar numSupporters={currnumsupporters} targetNum={targetnumsupporters} />
                            <p className="i">Signatures: <b>{currnumsupporters}</b> of <b>{targetnumsupporters}</b></p>
                            <div id="subContainer" className='flex flex-row items-center'>
                                <div className='w-60 tl'>
                                    <nobr>By: <b>{anonymity ? "Anonymous" : name}</b></nobr>
                                    <p>Created on: {DateToString(date_started)}</p>
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
                        <p>{description}</p>
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
                        <UpdatesSlider updateData={this.state.loadedUpdateData} />
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
                            {type === 'petition'
                                ? "Sign this petition"
                                : "Support this campaign"
                            }
                            <hr className='mw5 bb bw1 b--black-10'></hr>
                        </p>
                        <SupportForm refresh={this.refreshSupportData.bind(this)} userID={this.props.userID} username={this.props.username} id={this.state.id} />
                    </div>

                </article>
            );
        }
    }
}

export default LandingPage;