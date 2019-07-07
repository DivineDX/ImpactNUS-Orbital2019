/* Old import & export
import { Data } from './Data';
import { userDB } from './userDB';
import { UpdatesData } from './UpdatesData';
import {ReasonSupportData} from './ReasonSupportData';
*/

const Data = require('./Data');
const userDB = require('./userDB');
const UpdatesData = require('./UpdatesData');
const ReasonSupportData = require('./ReasonSupportData');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

//Retrieves array of all data (Petition + Campaigns)
app.get('/retrieveall', (req, res) => {
    res.json(Data);
});

app.get('/retrieve/:id', (req, res) => {
    let found = false;
    Data.forEach(data => {
        if(data.id == req.params.id) {
            found = true;
            return res.json(data);
        }
    })

    if (!found) {
        res.status(400).json('Not found');
    }
})

// Retrieves the list of updates of a petition
app.get('/updatesdata/:id', (req, res) => {
    let found = false;
    UpdatesData.forEach(post => {
        if (req.params.id == post.id) {
            found = true;
            return res.json(post.updates);
        }
    })
    if (!found) {
        res.status(400).json('not found');
    }
})

//Retrieves the list of signed support for a petition/campaign
app.get('/reasonssupport/:id', (req, res) => {
    let found = false;
    ReasonSupportData.forEach(data => {
        if (req.params.id == data.id) {
            found = true;
            return res.json(data.support);
        }
    })

    if (!found) {
        res.status(400).json('not found');
    }
})

//Retrieves user-specific dashboard data (only those that the person has started)
app.post('/dashboarddata', (req, res) => {
    let personalData = Data.filter(data => data.organizerID === req.body.userID);
    res.json(personalData);
});

app.post('/submitform', (req, res) => {
    const { userID, username, type, title, recipient, date_end, targetNum, anonymity, tags, description, imageURL } = req.body;
    const newID = Data[Data.length-1].id + 1;

    Data.push({
        type: type,
        id: newID,
        title: title,
        recipient: recipient,
        organizer: username,
        organizerID: userID,
        anonymity: anonymity,
        date_started: new Date(),
        date_end: date_end,
        description: description,
        tags: tags,
        image: imageURL,
        targetNum: targetNum,
        numSupporters: 0,
        numFollowing: 0,
        finished: false,
    })

    UpdatesData.push({
        id: newID,
        updates: [],
    })

    ReasonSupportData.push({
        id: newID,
        support: [],
    })
    res.json(Data[Data.length - 1]); //returns object of the newly created petition/campaign
})

//updates existing petition/campaign
app.put('/updateform', (req, res) => {
    let updated = false;
    const { id, recipient, date_end, targetNum, anonymity, tags, description, imageURL } = req.body;

    Data.forEach(data => {
        if (data.id === id) { //it is the data we want to update
            data.recipient = recipient;
            data.anonymity = anonymity;
            data.date_end = date_end;
            data.description = description;
            data.tags = tags;
            data.image = imageURL;
            data.targetNum = targetNum;
            updated = true;
            res.json(data);
        }
    })

    if (!updated) {
        return res.json('Error');
    }
})

app.post('/checkifsigned', (req, res) => {
    let signed = false;
    userDB.forEach(user => {
        if (user.userID === req.body.userID && user.supportedIDs.includes(req.body.id)) {
            signed = true;
            return res.json(true);
        }
    })

    if (!signed) {
        return res.json(false);
    }
})

/*Gets user id, checks whether user has already supported, if not, increment
the support number and add the reason of support (if not empty) into the 
*/
app.post('/signsupport', (req, res) => {
    let userFound = false;
    userDB.forEach(user => {
        if (req.body.userID === user.userID) {
            user.supportedIDs.push(req.body.id); //id of the petition/campaign     
            ReasonSupportData.forEach(data => {
                if(data.id === req.body.id) {
                    data.support.push({
                        id: data.support[data.support.length-1].id+1,
                        reason: req.body.reason,
                        datePosted: new Date(),
                        supporter: req.body.username,
                        description: req.body.description,
                        anonymous: req.body.anonymity,
                    })
                    userFound = true;
                    return res.json('Success');
                }
            })
        }
    })

    if(userFound) {
        Data.forEach(data => {
            if(data.id === req.body.id) {
                data.numSupporters++;
            }
        })
    }
    if (!userFound) {
        res.status(400).json('user not found');
    }
})

//Organizers who want to post an update for their campaign/petition
app.post('/postupdate', (req, res) => {
    let posted = false;

    UpdatesData.forEach(obj => {
        if (obj.id === req.body.id) {
            obj.updates.push({
                id: obj.updates[obj.updates.length - 1].id + 1,
                title: req.body.updateTitle,
                content: req.body.updateContent,
                datePosted: new Date(),
            })
            posted = true;
            res.json('Success');
        }
    })

    if (!posted) {
        res.status(400).json('Error');
    }
})


app.put('/victory', (req, res) => {
    let found = false;
    Data.forEach(data => {
        if (data.id === req.body.id
            && data.organizerID === req.body.organizerID) {
            data.finished = true;
            found = true;
            res.json('Success');
        }
    })

    if (!found) {
        res.status(400).json('Error');
    }
})

//Self-Explanatory: For deleting a petition/campaign
app.delete('/delete', (req, res) => {
    let found = false;
    for (let i = 0; i < Data.length; i++) {
        if (Data[i].id === req.body.id
            && Data[i].organizerID === req.body.organizerID) {
            Data.splice(i, 1);
            found = true;
            res.json('Success');
            break;
        }
    }

    if (!found) {
        res.status(400).json('Error');
    }
})

//Self-Explanatory: For sign in options 
app.post('/signin', (req, res) => {
    let signedIn = false;
    for (let user of userDB) {
        if (user.userID === req.body.id && user.password === req.body.password) {
            res.json({ success: true, username: user.name });
            signedIn = true;
            break;
        }
    }

    if (!signedIn) { //not signed in
        res.status(400).json('Error');
    }
});

app.listen(3001); //port number - 3000 is used for our frontend web