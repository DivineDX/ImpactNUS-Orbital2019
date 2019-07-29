const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const knex = require('knex');
const passport = require('@passport-next/passport');
const nusStrategy = require('passport-nus-openid').Strategy;
const jwt = require('jsonwebtoken');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: '', //change accordingly to your local computer!
        password: '',
        database: 'orbital'
    }
});

app.use(bodyParser.json());
app.use(cors());

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

const findOrCreate = (profile, func) => {
    // console.log("Profile: ", profile); //profile is an obj with displayName and nusNetID
    const nusNetID = profile.nusNetID;

    db('users').select('id')
        .where('id', '=', nusNetID)
        .then(data => {
            if (!data || !data.length) { //create new user
                db('users').returning('id').insert({
                    id: nusNetID,
                    password: '123', //will be removed later
                    name: profile.displayName,
                }).then(data => {
                    if(!data[0]) {
                        throw new Error();
                    }
                })
            }
        }).catch(err => res.status(400).json('Failed login'))
    func();
    return nusNetID;
}

passport.use(new nusStrategy({
    returnURL: 'http://localhost:3001/auth/nus/return', //redirects here
    realm: 'http://localhost:3000/',
    profile: true,
},
    function (identifier, profile, done) {
        profile.nusNetID = identifier.split("/")[3];
        findOrCreate(profile, function (err, user) {
            done(null, profile);
        })
    }
));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/nus', passport.authenticate('nus-openid'));

const authUser = (nusNetID, jwtToken) => {
    const decodedID = jwt.decode(jwtToken).user;
    return nusNetID === decodedID;
}

//sending jwt token
app.get('/auth/nus/return',
    function (req, res, next) {
        passport.authenticate('nus-openid', function (err, user, info) {
            var payload = {
                user: user.nusNetID,
                name: user.displayName, //literal full name
            };
            const token = jwt.sign(payload, "secret", { expiresIn: 60 * 60 * 24 }); //modify secret value
            res.cookie('token', token, { httpOnly: false /* TODO: Set secure: true */ });
            res.redirect('http://localhost:3000/');
        })(req, res, next)
    });


app.post('/isAuth', (req, res) => {
    const { nusNetID, jwtToken } = req.body;
    if (authUser(nusNetID, jwtToken)) {
        res.status(400).json(true);
    } else {
        res.status(403).json(false);
    }
});

app.post('/loginNUS', (req, res) => {
    const { jwtToken } = req.body;
    let decodedID;
    try {
        const decodedJWT = jwt.decode(jwtToken);
        decodedID = jwt.decode(jwtToken).user;
        if (decodedJWT.user) {
            res.json(decodedJWT);
        } else {
            res.json(false);
        }
    } catch {
        res.json(false);
    }
})
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
    const { userID, jwtToken } = req.body;
    const auth = authUser(userID, jwtToken); //authenticates
    if (auth) {
        db('pnc').join('users', 'pnc.organizer_id', '=', 'users.id')
            .select('pnc.id', 'pnc.type', 'pnc.title', 'pnc.recipient', 'users.name',
                'pnc.anonymity', 'pnc.imageurl', 'pnc.targetnumsupporters', 'pnc.currnumsupporters'
            )
            .where('organizer_id', '=', req.body.userID)
            .then(data => {
                res.json(data);
            }).catch(err => res.status(400).json('Unable to retrieve'));
    } else {
        res.json("Auth failed")
    }
});

//For Anti-Spam: Limit of 5/Month. Response True = pass spam check
app.post('/checkStart', (req, res) => {
    const limit = 5;
    db('pnc')
        .select('date_started')
        .where('organizer_id', '=', req.body.userID)
        .orderBy('date_started', 'desc')
        .limit(limit) //<-- This numbrer is the limit per month
        .then(data => { //data is an array
            const currTime = Date.now();
            const earliestPast5 = data.slice(-1)[0]; //last element in array
            console.log(earliestPast5);
            if (earliestPast5 === undefined || data.length < limit) { //no past started pnc or did not start more than 5
                res.json(true);
            } else {
                const earliestPast5Time = earliestPast5.date_started.getTime();
                const dayDiff = (currTime - earliestPast5Time) / 86400000; //convert to days
                console.log(dayDiff);
                if (dayDiff >= 30) {
                    res.json(true); //can post
                } else {
                    res.json(false); //cannot post
                }
            }
        }).catch(err => res.status(400).json('Error', err));
});

//Called in Form.js
app.post('/submitform', (req, res) => {
    const { jwtToken, userID, type, title, recipient, date_end, targetNum, anonymity, tags, description, imageURL } = req.body;
    const auth = authUser(userID, jwtToken);

    if (auth) {
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
    } else {
        res.json("Auth failed");
    }
})

//Used in Form.js
app.put('/updateform', (req, res) => {
    const { jwtToken, userID, id, recipient, date_end, targetNum, anonymity, tags, description, imageURL } = req.body;
    const auth = authUser(userID, jwtToken);

    if (auth) {
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
            .then(res.json(id))
            .catch(err => res.status(400).json('Update problem'));
    } else {
        res.json("Auth failed");
    }
})

//Used in SupportForm.js
app.post('/checkifsigned', (req, res) => {
    const { id, userID, jwtToken } = req.body;
    const auth = authUser(userID, jwtToken);

    if (auth) {
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
    } else {
        res.json("Auth failed");
    }
})

/*Gets user id, checks whether user has already supported, if not, increment
the support number and add the reason of support (if not empty) into the 
*/
//Used in SupportForm.js
app.post('/signsupport', (req, res) => {
    const { id, userID, jwtToken, description, reason, anonymity } = req.body;
    const auth = authUser(userID, jwtToken);

    if (auth) {
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
    } else {
        res.json("Auth failed");
    }
})

//Organizers who want to post an update for their campaign/petition
//Used in UpdateModal.js
app.post('/postupdate', (req, res) => {
    const { id, updateTitle, updateContent, organizerID, jwtToken } = req.body;
    const auth = authUser(organizerID, jwtToken);

    if (auth) {
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
    } else {
        res.json("Auth failed");
    }
})

//VictoryModal.js
app.put('/victory', (req, res) => {
    const { id, organizerID, jwtToken } = req.body;
    const auth = authUser(organizerID, jwtToken);

    if (auth) {
        db('pnc').where({
            id: id,
            organizer_id: organizerID,
        }).update({
            finished: true
        })
            .then(res.json('Success'))
            .catch(err => res.status(400).json('Update Error'));
    } else {
        res.json("Auth failed");
    }
})

//Self-Explanatory: For deleting a petition/campaign
//Used in deletemodal.js
app.delete('/delete', (req, res) => {
    const { id, organizerID, jwtToken } = req.body;
    const auth = authUser(organizerID, jwtToken);

    if (auth) {
        db('pnc').where({
            id: id,
            organizer_id: organizerID,
        }).del()
            .then(res.json('Success'))
            .catch(err => res.status(400).json('Error in delete'));
    } else {
        res.json("Auth failed");
    }
})

app.delete('/withdrawsupport', (req, res) => {
    const { id, poster_id, jwtToken} = req.body;
    const auth = authUser(poster_id, jwtToken);

    if (auth) {
        db('support').where({
            pnc_id: id,
            poster_id: poster_id,
        }).del()
            .then(res.json('Success'))
            .catch(err => res.status(400).json('Error in delete'));
    } else {
        res.json("Auth failed");
    }
})

//Manual Sign in function
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