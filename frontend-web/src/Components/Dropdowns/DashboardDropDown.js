import React from 'react'
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import UpdateModal from '../../Components/UpdateModal/UpdateModal'
import VictoryModal from '../../Components/VictoryModal/VictoryModal'
import DeleteModal from '../../Components/DeleteModal/DeleteModal';
import './DashboardDropDown.css';

const DashboardDropDown = (props) => {
    const { type } = props;

    return (
        <Dropdown text='Post Update' icon='gavel' floating labeled button className='icon'>
            <Dropdown.Menu>
                <Dropdown.Item >
                    <Link to="/startform" className="forceBlack">
                        {type === 'petition' ? "Edit Petition" : "Edit Campaign"}
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <UpdateModal buttonWord={"Post Update"} className = "hoverLink"/>
                </Dropdown.Item>
                <Dropdown.Item>
                    <VictoryModal buttonWord={"Declare Victory"} className = "hoverLink"/>
                </Dropdown.Item>
                <Dropdown.Item>
                    {type === 'petition'
                        ? <DeleteModal type={"petition"} className = "hoverLink"/>
                        : <DeleteModal type={"campaign"} className = "hoverLink"/>
                    }
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DashboardDropDown;



    // class DashboardDropDown extends Component {
        //     state = { activeItem: 'home' }

        //     handleItemClick = (e, { name }) => this.setState({ activeItem: name })

        //     render() {
        //         const { activeItem } = this.state
        //         const {type} = this.props;

        //         return (
        //             <Menu secondary className='test'>
        //                 <Menu.Item> 
        //                     <Link to ='/LandingPage'> Edit Petition </Link>
        //                 </Menu.Item>
        //                 <Menu.Item
        //                     name='messages'
        //                     active={activeItem === 'messages'}
        //                     onClick={this.handleItemClick}
        //                 />
        //                 <Menu.Item
        //                     name='friends'
        //                     active={activeItem === 'friends'}
        //                     onClick={this.handleItemClick}
        //                 />
        //             </Menu>
        //         );
        //     }
        // }

        // export default DashboardDropDown;