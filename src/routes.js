import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Mountain from './components/mainNav/Mountain';
import Road from './components/mainNav/Road';
import Gear from './components/mainNav/Gear';
import Parts from './components/mainNav/Parts';
import Accessories from './components/mainNav/Accessories';

import Cart from './components/rightNav/Cart';
import Search from './components/rightNav/Search';
import MyAccount from './components/rightNav/MyAccount';


import HomeBody from './components/styleComponents/HomeBody';



export default (
    <Switch>
        <Route exact path="/" component={HomeBody}/>
        <Route path="/mountain" component={Mountain}/>
        <Route path="/road" component={Road}/>
        <Route path="/gear" component={Gear}/>
        <Route path="/parts" component={Parts}/>
        <Route path="/accessories" component={Accessories}/>

        <Route path="/cart" component={Cart}/>
        <Route path="/search" component={Search}/>
        <Route path="/myAccount" component={MyAccount}/>
    </Switch>
)