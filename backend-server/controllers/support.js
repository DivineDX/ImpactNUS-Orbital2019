//Used in SupportForm.js
const checkIfSigned = (req, res, db, authFunc) => {
    const { id, userID, jwtToken } = req.body;
    const auth = authFunc(userID, jwtToken);

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
}

/*Gets user id, checks whether user has already supported, if not, increment
the support number and add the reason of support (if not empty) into the 
*/
//Used in SupportForm.js
const signSupport = (req, res, db, authFunc) => {
    const { id, userID, jwtToken, description, reason, anonymity } = req.body;
    const auth = authFunc(userID, jwtToken);

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
}

const withdrawSupport = (req, res, db, authFunc) => {
    const { id, poster_id, jwtToken } = req.body;
    const auth = authFunc(poster_id, jwtToken);

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
}

module.exports = {
    check: checkIfSigned,
    sign: signSupport,
    withdraw: withdrawSupport,
}