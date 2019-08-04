import React, { Component } from 'react';
import { Button, Progress } from 'semantic-ui-react'
import { Markup } from 'interweave';
import TargetCard from './TargetCard';
import SupportForm from '../Forms/SupportForm';
import ReasonSupportBulletin from '../ReasonSupportBulletin/ReasonSupportBulletin';
import UpdatesSlider from '../Sliders/UpdatesSlider';
import NonExistentPage from '../../Container/NonExistentPage/NonExistentPage';
import { DateToString } from '../DateConverter/DateToString';
import LandingPageHeading from '../Headers/LandingPageHeading';
import wireframeImage from '../../Images/wireframeImage.png';
import './LandingPage.css';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notFound: true,
            id: '',
            userID: '',
            loadedData: {},
            loadedUpdateData: [],
            loadedSupportData: [],
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({ id: id });
        fetch(`http://fathomless-ocean-65423.herokuapp.com/retrieve/${id}`)
            .then(resp => {
                if (resp.status === 200) { //data is loaded
                    this.setState({ notFound: false });
                }
                return resp.json();
            })
            .then(data => {
                this.setState({ loadedData: data });
            });

        fetch(`http://fathomless-ocean-65423.herokuapp.com/updatesdata/${id}`)
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                this.setState({ loadedUpdateData: data });
            });

        this.fetchSupportData(id);
    }

    fetchSupportData(id) {
        fetch(`http://fathomless-ocean-65423.herokuapp.com/reasonssupport/${id}`)
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                if (data !== 'Unable to retrieve') {
                    this.setState({ loadedSupportData: data });
                }
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
                <article id='landingPage' className=''>
                    <div className="pv3">
                        <h1 className='f2 tc' id='Title'> {title}</h1>
                    </div>
                    <img
                        className="pb3 ma3"
                        id='pageImage'
                        src={imageurl}
                        onError={(e) => { e.target.onerror = null; e.target.src = wireframeImage }}
                        alt="Error" />
                    <div id="subHeader" className='pv2 flex flex-column'>
                        <div id="description" className='pa3 mv3 tl'>
                            <Markup content={description} />
                        </div>
                        <div className='mt3 ml4 w-25' id='bigSection'>
                            <p className="i" id='Signature'>Signatures: <b id='targNum'>{currnumsupporters}</b> of <b>{targetnumsupporters}</b></p>
                            <Progress id='ProgressBar' color='teal' size='small' value={currnumsupporters} total={targetnumsupporters} />
                            <div>
                                <div className='w-60 tl' id='Extras'>
                                    <nobr className='tc'>By: <b>{anonymity ? "Anonymous" : name}</b></nobr>
                                    <p id='testtest'>Created on: {DateToString(date_started)}</p>
                                </div>
                                {/* <div className='ml0' id='SignButton'>
                                    {type === 'petition'
                                        ? <Button id='PetitionBut' color='orange' floated='right' circular>Sign Petition</Button>
                                        : <Button id='CampaignBut' color='orange' floated='right' circular>Support Campaign</Button>
                                    }
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {type === 'petition' &&
                        <div id="target" className='tc mv3'>
                            <p className='pv2 f4 i'>This petition will be sent to:</p>
                            <TargetCard name={recipient} />
                        </div>
                    }

                    <div id="Updates" className='pv4 ph2 bg-washed-green tc'>
                        <LandingPageHeading text="Updates" />
                        <UpdatesSlider updateData={this.state.loadedUpdateData} />
                    </div>

                    <div id="Reasons" className='pv3 ph2 tc'>
                        <LandingPageHeading text="Reasons for Support" />
                        <ReasonSupportBulletin reasonData={this.state.loadedSupportData} />
                    </div>

                    <div id="SupportForm" className='pv3 ph2 bg-washed-green'>
                        <LandingPageHeading text={type === 'petition' ? "Sign this petition" : "Support this campaign"} />
                        <SupportForm refresh={this.fetchSupportData.bind(this)} userID={this.props.userID} id={this.state.id} />
                    </div>

                </article>
            );
        }
    }
}

export default LandingPage;