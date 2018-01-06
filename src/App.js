import React, { Component } from 'react';
import './App.css';
import Header from './components/styleComponents/Header';
// import HomeBody from './components/styleComponents/HomeBody';
// import ComponentBody from './components/styleComponents/ComponentBody';
import routes from './routes';
// import HomeFooter from './components/styleComponents/HomeFooter';

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

export default App;
