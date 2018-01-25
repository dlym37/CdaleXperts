import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Header from './components/styleComponents/Header';
// import HomeBody from './components/styleComponents/HomeBody';
// import ComponentBody from './components/styleComponents/ComponentBody';
import routes from './routes';
// import HomeFooter from './components/styleComponents/HomeFooter';
import {connect} from 'react-redux';
import {changeHamClick} from './ducks/reducer';

class App extends Component {
 

  render() {
    return (
      <div>
        <Header />
        {routes}
      </div>

    )
  }
}
function mapStateToProps(state){
  return {
    hamClick: state.hamClick
  }
}
export default connect(mapStateToProps)(App);
