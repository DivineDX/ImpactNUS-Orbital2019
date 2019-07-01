import React from 'react';
import LoginForm from '../../Components/LoginModal/LoginForm';
import './LoginPage.css';

class LoginPage extends React.Component {
    render() {
        //unused prop: isSignedIn
        const {loginUser } = this.props;

        return (
            <div className='' id=''>
                <div className="w-75 pt5 center">
					<h1 className="tc baskerville f1 fw5">Login Page</h1>
				</div>

                <div className='mh4 mv3' id ='loginContainer'>
                    <LoginForm loginProp={loginUser} />
                </div>
            </div>
        );
    }

}

export default LoginPage;