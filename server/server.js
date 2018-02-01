require('dotenv').config();
const express = require('express'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  session = require('express-session'),
  config = require('./config'),
  stripe = require('stripe')(config.secret_key),
  passport = require('passport'),
  Auth0Strategy = require('passport-auth0');

const {
  AUTH_DOMAIN,
  AUTH_CLIENT_ID,
  AUTH_CLIENT_SECRET,
  AUTH_CALLBACK_URL,
  SESSION_SECRET
} = process.env;

const bikes_controller = require('./controllers/bikes_controller');
const cart_controller = require('./controllers/cart_controller');
const gear_controller = require('./controllers/gear_controller');
const userMiddleware = require('./userMiddlewares');

const app = express();
app.use(bodyParser.json());

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
app.use(userMiddleware.checkForSession);

app.use( express.static( `${__dirname}/../build` ) );
//Authentication setup
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTIONSTRING).then((db) => {
  app.set('db', db);
})

passport.use(new Auth0Strategy({
  domain: AUTH_DOMAIN,
  clientID: AUTH_CLIENT_ID,
  clientSecret: AUTH_CLIENT_SECRET,
  callbackURL: AUTH_CALLBACK_URL,
  scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done){
  let {user_id} = profile;
  let {givenName , familyName} = profile.name;
  console.log('Google Profile', profile);

  const db = app.get('db');

  db.find_user([user_id]).then(function(users){//need to create find_user
    if(!users[0]){
      db.create_user([ //need to create create_user
        givenName,
        familyName,
        user_id
      ]).then( user => {
        // console.log('user_id', user[0].id);
        return done(null, user[0].id)
      })
    } else {
      // console.log('user_id-------------------------', users[0]);
      return done(null, users[0].customerid)
    }
  })
}))

passport.serializeUser((id, done) => {
  return done(null, id);
})
passport.deserializeUser((id, done) => {
  // console.log('-------------------------id--------------------', id);
  app.get('db').find_session_user([id])
  .then(function(user){
    console.log(user)
    return done(null, user[0]);
  })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {//if someone is authenticated, the  callback function in passport.use is fired off
    successRedirect: process.env.REACT_APP_SUCCESS,
    failureRedirect: process.env.REACT_APP_FAILURE
}));
app.get('/auth/me', (req, res) => {
  // console.log('authme', req.user);
    if (!req.user) {
        res.status(404).send('User not found.');
    } else {
        res.status(200).send(req.user)
    }
})

app.get('/auth/logout', function (req, res){
  req.logOut();
  res.redirect(process.env.REACT_APP_FAILURE)
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
app.post('/api/address', cart_controller.send_address);
//gear
app.get('/api/gear/all', gear_controller.get_all_gear);
//search
app.get('/api/search', gear_controller.search_products);
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