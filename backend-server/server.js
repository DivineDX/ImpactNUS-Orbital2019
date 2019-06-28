import {Data} from './Data';
import {userDB} from './userDB';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());



//Retrieves array of all data (Petition + Campaigns)
app.get('/retrievedata', (req, res) => {
    res.json(Data);
});

//Retrieves user-specific data (only those that the person has started)
app.post('/retrievepersonaldata', (req, res) => {
    let personalData = Data.filter(data => data.organizerID === req.body.userID);
    res.json(personalData);
});

app.post('/startform', (req, res) => {

})

app.put('/updateform', (req, res) => {

})

app.put('/signsupport', (req, res) => {

})

app.post('/signin', (req, res) => {
    let signedIn = false;
    for (let user of userDB) {
        if(user.nusID === req.body.id && user.password === req.body.password){
            res.json("Successful Login");
            signedIn = true;
            break;
        }
    }

    if(!signedIn) { //not signed in
        res.status(400).json('Error logging in');
    }
});

app.listen(3001); //port number - 3000 is used for our frontend web

/* Planned Features for API
Minimal Implementation:
/ --> res: Working
/feed --> GET request (Retrieves user-data from database)
/start petition --> Post request

*/