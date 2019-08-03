//Called in Dashboard.js
const retrieveDashboard = (req, res, db, authFunc) => {
    const { userID, jwtToken } = req.body;
    const auth = authFunc(userID, jwtToken); //authenticates
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
}

//Organizers who want to post an update for their campaign/petition | Used in UpdateModal.js
const postUpdate = (req, res, db, authFunc) => {
    const { id, updateTitle, updateContent, organizerID, jwtToken } = req.body;
    const auth = authFunc(organizerID, jwtToken);

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
}

//VictoryModal.js
const victory = (req, res, db, authFunc) => {
    const { id, organizerID, jwtToken } = req.body;
    const auth = authFunc(organizerID, jwtToken);

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
}

//Self-Explanatory: For deleting a petition/campaign | Used in deletemodal.js
const deletePost = (req, res, db, authFunc) => {
    const { id, organizerID, jwtToken } = req.body;
    const auth = authFunc(organizerID, jwtToken);

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
}

module.exports = {
    retrieve: retrieveDashboard,
    update: postUpdate,
    victory: victory,
    delete: deletePost,
}