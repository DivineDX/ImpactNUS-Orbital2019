import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import UpdateModal from '../../Components/UpdateModal/UpdateModal'
import VictoryModal from '../../Components/VictoryModal/VictoryModal'
import DeleteModal from '../../Components/DeleteModal/DeleteModal';
import './DashboardDropDown.css';

class DashboardDropDown extends Component {

    render() {
        const { type, id, userID } = this.props;

        return (
            <Dropdown text='Choose Option' icon='gavel' floating labeled button className='icon'>
                <Dropdown.Menu>
                    <Dropdown.Item >
                        <Link to="/startform" className="forceBlack">
                            {type === 'petition' ? "Edit Petition" : "Edit Campaign"}
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <UpdateModal id={id} buttonWord={"Post Update"} className="hoverLink" />
                    </Dropdown.Item>
                    <Dropdown.Item disabled={this.props.finished}>
                        <VictoryModal refresh = {this.props.refresh} id={id} userID={userID} buttonWord={"Declare Victory"} className="hoverLink" />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        {type === 'petition'
                            ? <DeleteModal refresh = {this.props.refresh} userID={userID} id={id} type={"petition"} className="hoverLink" />
                            : <DeleteModal refresh = {this.props.refresh} userID={userID} id={id} type={"campaign"} className="hoverLink" />
                        }
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}


export default DashboardDropDown;