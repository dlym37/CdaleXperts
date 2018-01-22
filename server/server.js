require('dotenv').config();
const express = require('express'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  session = require('express-session'),
  config = require('./config'),
  stripe = require('stripe')(config.secret_key),
  passport = require('passport'),
  Auth0Strategy = require('passport-auth0');



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
//Authentication setup
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTIONSTRING).then(db => {
  app.set('db', db);
})


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
app.get('/api/cart/data', cart_controller.get_cart_data);
app.delete('/api/cart/remove', cart_controller.remove_from_cart);
app.put('/api/update/quantity', cart_controller.update_qty_cart);

//stripe
app.post('/api/payment', function (req, res, next) {
  //convert amount to pennies
  const amountArray = req.body.amount.toString().split('');
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if (amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
      break;
    } else {
      pennies.push(amountArray[i])
    }
  }
  const convertedAmt = parseInt(pennies.join(''));

  const charge = stripe.charges.create({
    amount: convertedAmt, // amount in cents, again
    currency: 'usd',
    source: req.body.token.id,
    description: 'Test charge from react app'
  }, function (err, charge) {
    if (err) return res.sendStatus(500)
    return res.sendStatus(200);
    // if (err && err.type === 'StripeCardError') {
    //   // The card has been declined
    // }
  });
});





app.listen(process.env.SERVER_PORT, () => {
  console.log("I am listening on port", process.env.SERVER_PORT)
})
// this.props.match.params.id