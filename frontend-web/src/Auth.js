import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const Auth = (nusNetID) => {
    fetch('http://localhost:3001/isAuth', {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            nusNetID: nusNetID,
            jwtToken: cookies.get('token'),
        })
    })
        .then(resp => resp.json())
        .then(data => {
            if (data) { //not exceed
                this.setState({ canStart: true });
            }
            this.setState({ loading: false });
        }).catch(err => console.log("Cannot check", err));
}

export const attemptLogin = (login) => {
    fetch('http://localhost:3001/loginNUS', {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            jwtToken: cookies.get('token'),
        })
    })
        .then(resp => resp.json())
        .then(nusNetID => {
            if (nusNetID) { //not exceed
                login(nusNetID);
            } else {
            }
        }).catch(err => alert("Login error", err));
}