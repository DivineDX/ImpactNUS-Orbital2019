import React, { Component } from 'react';
import Card from '../../Components/Card/Card';
import DashboardDropDown from '../../Components/Dropdowns/DashboardDropDown';
import Cookies from 'universal-cookie';
import AuthFailed from '../NonExistentPage/AuthFailed';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayedData: [],
            authFailed: false,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('http://localhost:3001/dashboarddata', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                userID: this.props.userID,
                jwtToken: new Cookies().get('token'),
            })
        })
            .then(resp => resp.json())
            .then(data => {
                if(data === 'Auth failed') {
                    this.setState({authFailed: true})
                } else {
                    this.setState({ displayedData: data });
                }
            });
    }

    render() {
        if(this.state.authFailed) {
            return (
                <AuthFailed/>
            )
        }
        return (	 //acts as a card list here
            <div>
                <div className="w-75 pt5 center bb b--black-10">
                    <h1 className="tc baskerville f1 fw5">Your Dashboard</h1>
                </div>

                {this.state.displayedData.map((data) => {
                    return <Card
                        loadedData={data}
                    >
                        <DashboardDropDown
                            refresh={this.fetchData.bind(this)}
                            finished={data.finished}
                            type={data.type}
                            id={data.id}
                            userID={this.props.userID} />
                    </Card>
                })}
            </div>
        );
    }
}

export default Dashboard;