require('dotenv').config();
const express = require('express'),
bodyParser = require('body-parser'),
massive = require('massive');
session = require('express-session');

const app = express();
app.use(bodyParser.json());

app.get('./api/mountain', )
// create request to pull from controller
// create controller to pull from DB 
// create function that will axios request the picture 
// apply picture in div as a style Element



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