const { Pool } = require('pg');
const CONFIG  = require('./config')


const pool = new Pool({
    user: CONFIG.DB.USER,
    host: CONFIG.DB.HOST,
    database: CONFIG.DB.DATABASE,
    password: CONFIG.DB.PASSWORD,
    port: CONFIG.DB.PORT
});

module.exports = pool;