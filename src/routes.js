import React from 'react';
import {Switch, Route} from 'react-router-dom';


import Cart from './components/rightNav/Cart';
import Search from './components/rightNav/Search';
import MyAccount from './components/rightNav/MyAccount';


import HomeBody from './components/styleComponents/HomeBody';
import ComponentBody from './components/styleComponents/ComponentBody';
import BikesBody from './components/styleComponents/BikesBody';
import ProductBody from './components/styleComponents/ProductBody';
import GearBody from './components/styleComponents/GearBody';



export default (
    <Switch>
        <Route exact path="/" component={HomeBody}/>
        <Route path='/bike/:type/:id' component={BikesBody}/>
        <Route path='/product/:type/:id' component={ProductBody}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/search" component={Search}/>
        <Route path="/myAccount" component={MyAccount}/>
        <Route path="/bikes/:type/:subType" component={ComponentBody}/>
        <Route path="/gear/:type" component={GearBody}/>
        
    </Switch>
)