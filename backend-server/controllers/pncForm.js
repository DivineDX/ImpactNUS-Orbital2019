//For Anti-Spam: Limit of 5/Month. Response True = pass spam check
const antiSpam = (req, res, db) => {
    const limit = 5;
    db('pnc')
        .select('date_started')
        .where('organizer_id', '=', req.body.userID)
        .orderBy('date_started', 'desc')
        .limit(limit) //<-- This numbrer is the limit per month
        .then(data => { //data is an array
            const currTime = Date.now();
            const earliestPast5 = data.slice(-1)[0]; //last element in array
            // console.log(earliestPast5);
            if (earliestPast5 === undefined || data.length < limit) { //no past started pnc or did not start more than 5
                res.json(true);
            } else {
                const earliestPast5Time = earliestPast5.date_started.getTime();
                const dayDiff = (currTime - earliestPast5Time) / 86400000; //convert to days
                // console.log(dayDiff);
                if (dayDiff >= 30) {
                    res.json(true); //can post
                } else {
                    res.json(false); //cannot post
                }
            }
        }).catch(err => res.status(400).json('Error', err));
}

//Called in Form.js
const submitForm = (req, res, db, authFunc) => {
    const { jwtToken, userID, type, title, recipient, date_end, targetNum, anonymity, tags, description, imageURL } = req.body;
    const auth = authFunc(userID, jwtToken);

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
}

//Called in Form.js
const updateForm = (req, res, db, authFunc) => {
    const { jwtToken, userID, id, recipient, date_end, targetNum, anonymity, tags, description, imageURL } = req.body;
    const auth = authFunc(userID, jwtToken);

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
}

module.exports = {
    antiSpam: antiSpam,
    submitForm: submitForm,
    updateForm: updateForm,
}
