require('dotenv').config();
const express = require('express'),
bodyParser = require('body-parser'),
massive = require('massive');
session = require('express-session');


const bikes_controller = require('./controllers/bikes_controller');
const cart_controller = require('./controllers/cart_controller');
const userMiddleware = require('./userMiddlewares');

const app = express();
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(userMiddleware.checkForSession);

//mountain
app.get('/api/mountain/all', bikes_controller.get_mountain);
app.get('/api/mountain/:subType', bikes_controller.get_mountain_styles);
//road
app.get('/api/road/all', bikes_controller.get_road);
app.get('/api/road/:subType', bikes_controller.get_road_styles);
//product
app.get('/api/product/:type/:id', bikes_controller.get_mountain_info);
//cart
app.put('/api/quantity', cart_controller.update_quantity);
app.get('/api/cart/data',cart_controller.get_cart_data);
app.delete('/api/cart/remove', cart_controller.remove_from_cart);







massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db);
    app.listen(process.env.SERVER_PORT, () => {
        console.log("I am listening on port", process.env.SERVER_PORT)
    })
})
// this.props.match.params.id