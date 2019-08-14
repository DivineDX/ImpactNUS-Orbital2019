const knex = require('knex');

module.exports = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres', //change accordingly to your local computer!
        password: 'test',
        database: 'orbital'
    }
    // connection: {
    //     connectionString: process.env.DATABASE_URL,
    //     ssl: true,
    // }
});