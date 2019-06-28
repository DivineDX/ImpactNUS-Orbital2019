import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Dropdown, Button } from 'semantic-ui-react';
import UpdateModal from '../../Components/UpdateModal/UpdateModal'
import VictoryModal from '../../Components/VictoryModal/VictoryModal'
import End from '../../Components/End/End'

const DashboardDropDown = (props) => {
        const {type} = props;
    
        return (
            <Dropdown text='Post Update' icon = 'gavel' floating labeled button className='icon'>
                <Dropdown.Menu>
                    {type === 'petition' //conditional
                        ? <div>
                            <Dropdown.Item>
                                <Button>
                                    <Link to="/editform" className="dropitem"> Edit Petition </Link>
                                </Button>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <UpdateModal  buttonWord={"Post Update"}/>
                                {/* <LoginModal loginProp={loginProp} buttonWord={"Login"}> Post Update </LoginModal> */}
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <VictoryModal  buttonWord={"Declare Victory"}/>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <End buttonWord={"End Petition"}/>
                            </Dropdown.Item>
                        </div>
                        : <div>
                            <Dropdown.Item>
                                <Link to="/editform" className="dropitem"> Edit Campaign </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <UpdateModal  buttonWord={"Post Update"}/>
                                {/* <LoginModal loginProp={loginProp} buttonWord={"Login"}> Post Update </LoginModal> */}
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <End buttonWord={"End Campaign"}/>
                            </Dropdown.Item>
                        </div>
                    }
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