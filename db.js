const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: '327745',
    host: 'localhost',
    port: 5432,
    database: 'practic_1'
})

module.exports = pool