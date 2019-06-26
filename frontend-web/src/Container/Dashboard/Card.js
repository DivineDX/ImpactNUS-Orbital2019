import React from 'react';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import { Link } from 'react-router-dom';
import './Card.css';
import { Dropdown, Button } from 'semantic-ui-react';

const options = [
    { key: 'edit', icon: 'edit', text: 'Edit Post', value: 'edit' },
    { key: 'delete', icon: 'delete', text: 'Remove Post', value: 'delete' },
    { key: 'hide', icon: 'hide', text: 'Hide Post', value: 'hide' },
  ]

const Card = ({ key, type, title, recipient, organizer, anonymity, date_started, description, image, targetNum, numSupporters, numFollowing }) => { //Destructuring
    let footer = '';
    if (type === 'petition') {
        footer = numSupporters + " Signed | Target: " + targetNum;
    } else { //campaign
        footer = numSupporters + " Supported | Target: " + targetNum;
    }

    let displayedOrganizer = '';
    if (anonymity) {
        displayedOrganizer = "Anonymous";
    } else{
        displayedOrganizer = organizer;
    }

    let flag = false;

    return (
        <section className="avenir helpme">
            <article className="bb b--black-10">
                    <div className="card-container">
                        <div className="text_wrap">
                            <h2 className="">{title} </h2>
                            <p className="i">{recipient}</p>
                            <p className="">
                                {description}
                                <text> </text>
                                <Link to="/LandingPage"> 
                                {/* to add links to indiv page  */}
                                <text className='readmore'> Read more </text>
                                </Link>
                            </p>
                            <ProgressBar numSupporters = {numSupporters} targetNum = {targetNum}/>
                            <p>{footer}</p>
                        </div>
                        <div className="img_wrap">
                            <img src={image} className="w-100" alt="IMG" />

                            {/* <Button.Group color='teal'> */}
                                {/* <Button> Save </Button> */}
                                <Dropdown text='Choose Action' pointing className='link item'>
                                <Dropdown.Menu>
                                    <Dropdown.Item> 
                                        <Link to="/editform" className = "dropitem"> Edit Petition </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/landingpage" className = "dropitem"> View Discussion </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/updatesslider" className = "dropitem"> Post Update </Link>
                                    </Dropdown.Item>
                                    {type === 'petition' //conditional
                                    ?   <div>
                                        <Dropdown.Item>
                                            <Link to="/" className = "dropitem"> Declare Victory </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link to="/" className = "dropitem"> End Petition </Link>
                                        </Dropdown.Item>
                                        </div>
                                    : <Dropdown.Item>
                                            <Link to="/" className = "dropitem"> End Campaign </Link>
                                        </Dropdown.Item>
                                    }    
                                    </Dropdown.Menu>
                                </Dropdown>
                            {/* </Button.Group> */}
                        </div>
                    </div>
            </article>
        </section>
    )
}

export default Card;