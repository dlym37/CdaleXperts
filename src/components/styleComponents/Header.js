import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavOptions from './NavOptons';

class HomeNav extends Component {
  constructor() {
    super()
    this.state = {
      mountain: false,
      road: false,
      gear: false,
      parts: false,
      accessories: false
    }
  }
  handleMountain = () => {
    if (this.state.mountain === false) {
        this.setState({
            mountain: true
        })
    } else {
        this.setState({
            mountain: false
        })
    }

}
handleRoad = () => {
    if (this.state.road === false) {
        this.setState({
            road: true
        })
    } else {
        this.setState({
            road: false
        })
    }

}
handleGear = () => {
    if (this.state.gear === false) {
        this.setState({
            gear: true
        })
    } else {
        this.setState({
            gear: false
        })
    }

}
handleParts = () => {
    if (this.state.parts === false) {
        this.setState({
            parts: true
        })
    } else {
        this.setState({
            parts: false
        })
    }

}
handleAccessories = () => {
    if (this.state.accessories === false) {
        this.setState({
            accessories: true
        })
    } else {
        this.setState({
            accessories: false
        })
    }

}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src='https://www.cannondaleexperts.com/assets/images/artwork/cannondale-experts-logo.jpg' className="App-logo" alt="logo" />
          </Link>
          <nav>
            <Link to="/mountain" onMouseOver={this.handleMountain}> <li>Mountain</li></Link>
            <Link to="/road" onMouseOver={this.handleRoad}> <li>Road</li></Link>
            <Link to="/gear" onMouseOver={this.handleGear}> <li>Gear</li></Link>
            <Link to="/parts" onMouseOver={this.handleParts}> <li>Parts</li></Link>
            <Link to="/accessories" onMouseOver={this.handleAccessories}> <li>Accessories</li></Link>
          </nav>
          <ul className="navUl">
            <Link to="/search"><li>Search</li></Link>
            <Link to="/myAccount"><li>My Account</li></Link>
            <Link to="/cart"><li>Cart</li></Link>
          </ul>
        </header>
        <NavOptions
          mountain={this.state.mountain}
          road={this.state.road}
          gear={this.state.gear}
          parts={this.state.parts}
          accessories={this.state.accessories}
        />
      </div>

    )

  }
}
export default HomeNav;



