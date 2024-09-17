const { Pool } = require('pg');
const CONFIG  = require('./config')

const pool = new Pool({
    host: CONFIG.DB.HOST,
    user: CONFIG.DB.USER,
    database: CONFIG.DB.DATABASE,
    password: CONFIG.DB.PASSWORD,
    port: CONFIG.DB.PORT
});


module.exports = pool;