// jshint esversion:6
const dotenv = require('dotenv');
require('dotenv').config({ path: '../'});
const mysql = require('mysql');


module.exports = {
    // mongo db url
    // mongoDBUrl: `mongodb+srv://medic_metric:infDHl4H4v9PGXHE@cluster0-86nth.mongodb.net/test?retryWrites=true&w=majority`,
    mongoDBUrl: 'mongodb+srv://admin-sedem:MONCLUSKL1neFeLtEr1@hacking-homeless-qjjdd.mongodb.net/hacking-homeless',
    mongoDBOptions: {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    },
    con1: mysql.createConnection(
         {
            host:`127.0.0.1`,
            user:`root`,
            password:``,
            database:`medmetricusa`
        }
    ),
    con2: mysql.createConnection(
        {
            host:`127.0.0.1`,
            user:`root`,
            password:``,
            database:`medmetricgh`
        }
    ),
    con3: mysql.createConnection(
        {
            host:`127.0.0.1`,
            user:`root`,
            password:``,
            database:`medmetricchina`
        }
    ),
    pgConUrl: `postgres://postgres:postgres@localhost:5432/database`
};