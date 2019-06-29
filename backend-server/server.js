import {Data} from './Data';
import {userDB} from './userDB';
import {UpdatesData} from './UpdatesData';

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

// Retrieves the list of updates of a petition
app.get('/updatesdata/:id', (req, res) => {
    let found = false;
    UpdatesData.forEach(post => {
        if(req.params.id == post.id){
            found = true;
            return res.json(post.updates);
        }
    })
    if(!found) {
        res.status(400).json('not found');
    }
})

//Retrieves user-specific dashboard data (only those that the person has started)
app.post('/retrievepersonaldata', (req, res) => {
    let personalData = Data.filter(data => data.organizerID === req.body.userID);
    res.json(personalData);
});

app.post('/submitform', (req, res) => {
    const {userID, username, type, title, targetGroup, endDate, targetSupporters, anonymity, tags, description, imageURL} = req.body;
    Data.push({
        type: type,
        id: Data.length + 1,
        title: title,
        recipient: targetGroup,
        organizer: username,
        organizerID: userID,
        anonymity: anonymity,
        date_started: new Date(),
        date_end: endDate,
        description: description,
        tags: tags,
        image: imageURL,
        targetNum: targetSupporters,
        numSupporters: 0,
        numFollowing: 0,
        finished: false,
    })
    res.json(Data[Data.length-1]); //returns object of the newly created 
})

//updates existing petition/campaign
app.put('/updateform', (req, res) => {

})

/*Gets user id, checks whether user has already supported, if not, increment
the support number and add the reason of support (if not empty) into the 
*/
app.put('/signsupport', (req, res) => {

})



//Organizers who want to post an update for their campaign/petition
app.post('/postupdate', (req, res) => {
})

app.post('/signin', (req, res) => {
    let signedIn = false;
    for (let user of userDB) {
        if(user.nusID === req.body.id && user.password === req.body.password){
            res.json({success: true, username: user.name});
            signedIn = true;
            break;
        }
    }

    if(!signedIn) { //not signed in
        res.status(400).json('Error');
    }
});

/*Will code in the future
app.post('/follow', (req, res) => {

}) */


app.listen(3001); //port number - 3000 is used for our frontend web