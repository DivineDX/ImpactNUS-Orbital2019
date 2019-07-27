import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import UpdateModal from '../../Components/Modals/UpdateModal'
import VictoryModal from '../../Components/Modals/VictoryModal'
import DeleteModal from '../../Components/Modals/DeleteModal';
import './DashboardDropDown.css';

class DashboardDropDown extends Component {
    render() {
        const { type, id, userID } = this.props;
        return (
            <div>
            <Dropdown text='Choose Option' icon='gavel' floating labeled button className='icon' id='NormalDisplay'>
                <Dropdown.Menu>
                    <Dropdown.Item >
                        <Link to={{
                            pathname: "/startform",
                            state: {
                                editing: true,
                                id: id,
                            }
                        }} className="forceBlack">
                            {type === 'petition' ? "Edit Petition" : "Edit Campaign"}
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <UpdateModal id={id} userID = {userID} buttonWord={"Post Update"} className="hoverLink" />
                    </Dropdown.Item>
                    <Dropdown.Item disabled={this.props.finished}>
                        <VictoryModal 
                            refresh={this.props.refresh} 
                            id={id} userID={userID}
                            type={type}
                            className="hoverLink" />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        {type === 'petition'
                            ? <DeleteModal refresh={this.props.refresh} userID={userID} id={id} type={"petition"} className="hoverLink" />
                            : <DeleteModal refresh={this.props.refresh} userID={userID} id={id} type={"campaign"} className="hoverLink" />
                        }
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <Dropdown icon='gavel' floating labeled button className='icon' id='MobileDisplay'>

                <Dropdown.Menu>
                    <Dropdown.Item >
                        <Link to={{
                            pathname: "/startform",
                            state: {
                                editing: true,
                                id: id,
                            }
                        }} className="forceBlack">
                            {type === 'petition' ? "Edit Petition" : "Edit Campaign"}
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <UpdateModal id={id} userID = {userID} buttonWord={"Post Update"} className="hoverLink" />
                    </Dropdown.Item>
                    <Dropdown.Item disabled={this.props.finished}>
                        <VictoryModal 
                            refresh={this.props.refresh} 
                            id={id} userID={userID}
                            type={type}
                            className="hoverLink" />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        {type === 'petition'
                            ? <DeleteModal refresh={this.props.refresh} userID={userID} id={id} type={"petition"} className="hoverLink" />
                            : <DeleteModal refresh={this.props.refresh} userID={userID} id={id} type={"campaign"} className="hoverLink" />
                        }
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
        );
    }
}


export default DashboardDropDown;