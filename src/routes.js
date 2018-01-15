import React from 'react';
import {Switch, Route} from 'react-router-dom';


import Cart from './components/rightNav/Cart';
import Search from './components/rightNav/Search';
import MyAccount from './components/rightNav/MyAccount';


import HomeBody from './components/styleComponents/HomeBody';
import ComponentBody from './components/styleComponents/ComponentBody';



export default (
    <Switch>
        <Route exact path="/" component={HomeBody}/>
        <Route path="/:type/:subType" component={ComponentBody}/>
      

        <Route path="/cart" component={Cart}/>
        <Route path="/search" component={Search}/>
        <Route path="/myAccount" component={MyAccount}/>
    </Switch>
)