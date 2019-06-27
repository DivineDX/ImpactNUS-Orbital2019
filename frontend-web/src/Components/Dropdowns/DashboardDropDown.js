import React from 'react'
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react'

const DashboardDropDown = (props) => {
    const {type} = props;

    return (
        <Dropdown text='Action' icon = 'gavel' floating labeled button className='icon'>
            <Dropdown.Menu>
                <Dropdown.Item>
                    <Link to="/editform" className="dropitem"> Edit Petition </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link to="/updatesslider" className="dropitem"> Post Update </Link>
                </Dropdown.Item>
                {type === 'petition' //conditional
                    ? <div>
                        <Dropdown.Item>
                            <Link to="/" className="dropitem"> Declare Victory </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to="/" className="dropitem"> End Petition </Link>
                        </Dropdown.Item>
                    </div>
                    : <Dropdown.Item>
                        <Link to="/" className="dropitem"> End Campaign </Link>
                    </Dropdown.Item>
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DashboardDropDown;
