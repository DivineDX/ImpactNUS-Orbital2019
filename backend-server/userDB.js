const userDB = [ //Fake databse for testing login. Delete after NUS OpenID API is added
	{
        userID: 'admin',
        name: 'admin',
        password: '123',
        supportedIDs: [],
    },
    {
        userID: 'e0309595',
        name: 'De Xun',
        password: 'xd123',
        supportedIDs: [1,5],
    },
    {
        userID: 'e0322822',
        name: 'Phaedra',
        password: '123',
        supportedIDs: [],
    }
];

module.exports = userDB;
