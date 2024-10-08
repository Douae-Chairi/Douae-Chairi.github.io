const fs = require('fs')
const pg = require("pg");
let dotenv = require('dotenv')
const passwordHash = require('password-hash');

let config = {
    user: user,
    host: host,
    database: database,
    password: password,
    port: parseInt(port),
    max: 0
}

const pool = new pg.Pool(config);