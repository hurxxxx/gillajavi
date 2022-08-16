
const pgp = require("pg-promise")(/*options*/);
const cn = {
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: 'postgres',
    user: 'gillajavi',
    password: '369Wkwks'
};

const db = pgp(cn);

exports.db = db
