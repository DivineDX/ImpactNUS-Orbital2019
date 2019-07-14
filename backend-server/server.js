const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: '', //change accordingly to your local computer!
        password: '',
        database: 'orbital'
    }
});

//Used in Bulletin and Featured, passed down to card
app.get('/retrieveall', (req, res) => {
    db('pnc').join('users', 'pnc.organizer_id', '=', 'users.id')
        .select('pnc.id', 'pnc.type', 'pnc.title', 'pnc.recipient', 'pnc.organizer_id', 'pnc.anonymity',
            'pnc.date_started', 'pnc.date_end', 'pnc.description', 'pnc.tags', 'pnc.imageurl',
            'pnc.targetnumsupporters', 'pnc.currnumsupporters', 'pnc.numfollowers', 'pnc.finished',
            'users.name')
        .then(data => {
            if (!data || !data.length) {
                throw err;
            }
            res.json(data);
        }).catch(err => res.status(400).json('Unable to retrieve'));
});

//Used in Form.js(Edit form) and Landing Page
app.get('/retrieve/:id', (req, res) => {
    db('pnc').join('users', 'pnc.organizer_id', '=', 'users.id')
        .select('pnc.id', 'pnc.type', 'pnc.title', 'pnc.recipient', 'pnc.organizer_id', 'pnc.anonymity',
            'pnc.date_started', 'pnc.date_end', 'pnc.description', 'pnc.tags', 'pnc.imageurl',
            'pnc.targetnumsupporters', 'pnc.currnumsupporters', 'pnc.numfollowers', 'pnc.finished',
            'users.name')
        .where('pnc.id', '=', req.params.id)
        .then(data => {
            if (!data || !data.length) {
                throw err;
            }
            res.json(data[0]);
        }).catch(err => res.status(400).json('Unable to retrieve'));
})

// Called in UpdatesSlider.js
app.get('/updatesdata/:id', (req, res) => {
    db('updates').select('title', 'content', 'dateposted').where('pnc_id', '=', req.params.id)
        .then(data => {
            res.json(data);
        }).catch(err => res.status(400).json('Unable to retrieve'));

})

//Used in ReasonSupportBulletin.js
app.get('/reasonssupport/:id', (req, res) => {
    db('support').join('users', 'support.poster_id', '=', 'users.id')
        .select('support.poster_id', 'support.poster_description', 'support.content',
            'support.anonymity', 'support.dateposted', 'users.name')
        .where('support.pnc_id', '=', req.params.id)
        .then(data => {
            res.json(data);
        }).catch(err => res.status(400).json('Unable to retrieve'));
})

//Called in Dashboard.js
app.post('/dashboarddata', (req, res) => {
    db('pnc').select('id', 'type', 'title', 'recipient', 'organizer_id',
        'anonymity', 'imageurl', 'targetnumsupporters', 'currnumsupporters')
        .where('organizer_id', '=', req.body.userID)
        .then(data => {
            res.json(data);
        }).catch(err => res.status(400).json('Unable to retrieve'));
});

//Called in Form.js
app.post('/submitform', (req, res) => {
    const { userID, type, title, recipient, date_end, targetNum, anonymity, tags, description, imageURL } = req.body;

    db('pnc').returning('id').insert({
        type: type,
        title: title,
        recipient: recipient,
        organizer_id: userID,
        anonymity: anonymity,
        date_started: new Date(),
        date_end: date_end,
        description: description,
        tags: tags,
        imageurl: imageURL,
        targetnumsupporters: targetNum,
    })
        .then(id => {
            res.json(id[0]); //id of the newly created petition/campaign
        })
        .catch(err => {
            res.status(400).json('Unable to post');
        });
})

//Used in Form.js
app.put('/updateform', (req, res) => {
    let updated = false;
    const { id, recipient, date_end, targetNum, anonymity, tags, description, imageURL } = req.body;

    db('pnc').where('id', '=', id)
        .update({
            recipient: recipient,
            anonymity: anonymity,
            date_end: date_end,
            description: description,
            tags: tags,
            imageurl: imageURL,
            targetnumsupporters: targetNum,
        })
        .catch(err => res.status(400).json('Update problem'));
})

//Used in SupportForm.js
app.post('/checkifsigned', (req, res) => {
    const { id, userID } = req.body;
    db('support').where({
        poster_id: userID,
        pnc_id: id,
    }).then(data => {
        if (data.length) {
            res.json(true);
        } else {
            res.json(false);
        }
    }).catch(err => res.status(400).json('Update problem'));

})

/*Gets user id, checks whether user has already supported, if not, increment
the support number and add the reason of support (if not empty) into the 
*/
//Used in SupportForm.js
app.post('/signsupport', (req, res) => {
    const { id, userID, description, reason, anonymity } = req.body;
    db('support').returning('support_id').insert({
        poster_id: userID,
        poster_description: description,
        content: reason,
        pnc_id: id,
        anonymity: anonymity,
        dateposted: new Date(),
    })  
    .then(data => {
        if (data[0]) { //exists
            db('pnc')
                .where('id', '=', id)
                .increment('currnumsupporters', 1)
                .then(res.json('Success'))
        } else {
            throw new Error();
        }
    })
    .catch(err => res.status(400).json('Unable to support'));
})

//Organizers who want to post an update for their campaign/petition
//Used in UpdateModal.js
app.post('/postupdate', (req, res) => {
    const { id, updateTitle, updateContent, organizerID } = req.body;
    db('updates').returning('update_id').insert({
        title: updateTitle,
        content: updateContent,
        dateposted: new Date(),
        pnc_id: id,
        organizer_id: organizerID,
    }).then(data => {
        if (data[0]) {
            res.json('Success');
        } else {
            throw new Error();
        }
    }).catch(err => res.status(400).json('Update failed'));
})

//VictoryModal.js
app.put('/victory', (req, res) => {
    const { id, organizerID } = req.body;
    db('pnc').where({
        id: id,
        organizer_id: organizerID,
    }).update({
        finished: true
    })
        .then(res.json('Success'))
        .catch(err => res.status(400).json('Update Error'));
})

//Self-Explanatory: For deleting a petition/campaign
//Used in deletemodal.js
app.delete('/delete', (req, res) => {
    const { id, organizerID } = req.body;
    db('pnc').where({
        id: id,
        organizer_id: organizerID,
    }).del()
        .then(res.json('Success'))
        .catch(err => res.status(400).json('Error in delete'));
})

//LoginForm.js
app.post('/signin', (req, res) => {
    const { id, password } = req.body;
    db('users').select('id', 'password', 'name')
        .where('id', '=', id).andWhere('password', '=', password)
        .then(data => {
            if (!data || !data.length) {
                throw err;
            }
            res.json(data[0].name);
        }).catch(err => res.status(400).json('Failed login'))
});

app.listen(3001); //port number - 3000 is used for our frontend web