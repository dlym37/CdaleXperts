import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class HomeFooter extends Component {





    render() {

        return (

            <footer className={this.props.show ? 'footer click2' : 'footer'}>
                <div>
                    <img src='https://www.cannondaleexperts.com/assets/images/artwork/cannondale-experts-logo.jpg' alt="logo" className="app-logo" />
                </div>
                <div className="menus">
                    <div className="footerColumns">
                        <div className='columnTitle'>Shop:</div>
                        <br />
                        <ul>
                            <li>Bikes</li>
                            <li>Gear</li>
                            <li>Parts</li>
                            <li>Accessories</li>
                            <li>Blind Box</li>
                            <li>Deals</li>
                        </ul>
                    </div>
                    <div className="footerColumns">
                        <div className='columnTitle'>Company:</div>
                        <br />
                        <ul>
                            <li>About Us</li>
                            <li>Infinite Cycles</li>
                            <li>My Account</li>
                            <li>Shipping</li>
                        </ul>
                    </div>
                    <div className="footerColumns">
                        <div className='columnTitle'>Support:</div>
                        <br />
                        <ul>
                            <li>Financing</li>
                            <li>Terms and Conditions</li>
                           <Link to='/contact-us'> <li>Contact Us</li> </Link>
                            <li>Parts By Model</li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
        return (
            <div></div>
        )

    }
}
export default HomeFooter;