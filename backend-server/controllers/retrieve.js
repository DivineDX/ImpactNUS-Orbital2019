//Used in Form.js(Edit form) and Landing Page
const retrieveOne = (req, res, db) => {
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
}

//Used in Bulletin, passed down to card
const retrieveAll = (req, res, db) => {
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
}

// Called in UpdatesSlider.js
const retrieveUpdates = (req, res, db) => {
    db('updates').select('title', 'content', 'dateposted').where('pnc_id', '=', req.params.id)
        .then(data => {
            res.json(data);
        }).catch(err => res.status(400).json('Unable to retrieve'));
}

//Used in ReasonSupportBulletin.js
const retrieveReasonsSupport = (req, res, db) => {
    db('support').join('users', 'support.poster_id', '=', 'users.id')
        .select('support.poster_id', 'support.poster_description', 'support.content',
            'support.anonymity', 'support.dateposted', 'users.name')
        .where('support.pnc_id', '=', req.params.id)
        .then(data => {
            res.json(data);
        }).catch(err => res.status(400).json('Unable to retrieve'));
}

module.exports = {
    getOne: retrieveOne,
    getAll: retrieveAll,
    updates: retrieveUpdates,
    support: retrieveReasonsSupport
}