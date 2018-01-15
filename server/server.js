require('dotenv').config();
const express = require('express'),
bodyParser = require('body-parser'),
massive = require('massive');
session = require('express-session');

const bikes_controller = require('./controllers/bikes_controller');

const app = express();
app.use(bodyParser.json());

//mountain
app.get('/api/mountain/:subType', bikes_controller.get_mountain);
app.get('/api/:type/:subType', bikes_controller.get_mountain_styles);
//road
app.get('/api/road/:subtype', bikes_controller.get_road);
app.get('/api/:type/:subType', bikes_controller.get_road_styles);





let port = 5000;

massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db);
    app.listen(port, () => {
        console.log("I am listening on port", port)
    })
})
// this.props.match.params.id