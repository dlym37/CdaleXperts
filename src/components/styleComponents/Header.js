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
            show: true
        })
    } else {
        this.setState({
            show: false
        })
    }

}
handleRoad = () => {
    if (this.state.road === false) {
        this.setState({
            show: true
        })
    } else {
        this.setState({
            show: false
        })
    }

}
handleGear = () => {
    if (this.state.gear === false) {
        this.setState({
            show: true
        })
    } else {
        this.setState({
            show: false
        })
    }

}
handleParts = () => {
    if (this.state.parts === false) {
        this.setState({
            show: true
        })
    } else {
        this.setState({
            show: false
        })
    }

}
handleAccessories = () => {
    if (this.state.accessories === false) {
        this.setState({
            show: true
        })
    } else {
        this.setState({
            show: false
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
            <Link to="/mountain" onBlur={this.handleMountain}> <li>Mountain</li></Link>
            <Link to="/road"> <li>Road</li></Link>
            <Link to="/gear"> <li>Gear</li></Link>
            <Link to="/parts"> <li>Parts</li></Link>
            <Link to="/accessories"> <li>Accessories</li></Link>
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



