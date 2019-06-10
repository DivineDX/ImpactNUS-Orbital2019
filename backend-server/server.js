const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const userDB = [ //Fake databse for testing login. Delete after NUS OpenID API is added
	{
        nusID: 'admin',
        password: '123',
    },
    {
        nusID: 'dx',
        password: 'xd123',
    }
];

//this is a test example. Use postman for interaction!
app.get('/', (req, res) => {
    res.send("Get success");
});

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
})
app.listen(3001); //port number - 3000 is used for our frontend web

/* Planned Features for API
Minimal Implementation:
/ --> res: Working
/signin --> POST success/fail. Will replace with NUS OpenID platform later on
/dashboard --> GET request (Retrieves user-data from database)
/feed --> GET request (Retrieves user-data from database)
/bulletin --> GET request (Retrieves global data from database)
/start petition --> Post request

*/