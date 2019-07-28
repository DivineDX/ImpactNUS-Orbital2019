import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const authUser = (nusNetID) => {
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
                console.log("Auth response: ", data);
            }
        }).catch(err => console.log("Cannot check", err));
}

// export const containerMount = () => {
//     const jwtToken = new Cookies().get('token');
//     if (jwtToken) {
//         console.log("There is a JWT Token")
//         attemptLogin(this.loginUser);
//     } else {
//         console.log("there isnt a jwt token");
//     }
// }

export const attemptLogin = (login) => { //login is a function
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