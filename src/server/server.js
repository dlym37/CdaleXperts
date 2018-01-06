require('dotenv').config();
const express = require('express'),
bodyParser = require('body-parser'),
massive = require('massive');
session = require('express-session');

const app = express();
app.use(bodyParser.json());






let port = 5000;

massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db);
    app.get('db').init.seed_file().then(res => {
        console.log(res);
    })
    app.listen(port, () => {
        console.log("I am listening on port", port)
    })
})