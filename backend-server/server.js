const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const passport = require('@passport-next/passport');
const nusStrategy = require('passportnext-nus-openid').Strategy;
const jwt = require('jsonwebtoken');

//imports of controllers
const retrieve = require('./controllers/retrieve');
const dashboard = require('./controllers/dashboard');
const pncForm = require('./controllers/pncForm');
const support = require('./controllers/support');

//configs
const urls = require('./config/urls');
const db = require('./config/database');

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
                    if (!data[0]) {
                        throw new Error();
                    }
                })
            }
        }).catch(err => res.status(400).json('Failed login'))
    func();
    return nusNetID;
}

passport.use(new nusStrategy({
    returnURL: `${urls.apiServerURL}/auth/nus/return`,
    realm: urls.frontendURL,
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
            // res.cookie('token', token, { httpOnly: false /* TODO: Set secure: true */ });
            res.redirect(urls.frontendURL + `?authToken=${token}`);
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

app.get('/', (req, res) => {
    res.send('ImpactNUS Server is working')
});
app.get('/retrieveall', (req, res) => { retrieve.getAll(req, res, db) });
app.get('/retrieve/:id', (req, res) => { retrieve.getOne(req, res, db) });
app.get('/updatesdata/:id', (req, res) => { retrieve.updates(req, res, db) });
app.get('/reasonssupport/:id', (req, res) => { retrieve.support(req, res, db) });

app.post('/checkStart', (req, res) => { pncForm.antiSpam(req, res, db) });
app.post('/submitform', (req, res) => { pncForm.submitForm(req, res, db, authUser) })
app.put('/updateform', (req, res) => { pncForm.updateForm(req, res, db, authUser) })

app.post('/checkifsigned', (req, res) => { support.check(req, res, db, authUser) })
app.post('/signsupport', (req, res) => { support.sign(req, res, db, authUser) })
app.delete('/withdrawsupport', (req, res) => { support.withdraw(req, res, db, authUser) })

app.post('/dashboarddata', (req, res) => { dashboard.retrieve(req, res, db, authUser) });
app.post('/postupdate', (req, res) => { dashboard.update(req, res, db, authUser) })
app.put('/victory', (req, res) => { dashboard.victory(req, res, db, authUser) })
app.delete('/delete', (req, res) => { dashboard.delete(req, res, db, authUser) })

//Manual Sign in function, to be deleted
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

app.listen(process.env.PORT || 3001); //port number - 3000 is used for our frontend web