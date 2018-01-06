import React, { Component } from 'react';



class HomeFooter extends Component {





    render() {

        // const showing= 
        // {
        //     display: {
        //         display: true},
        //     doNot: {
        //         display: false}
        //     }
        if (this.props.show) {
            console.log('Hit');
            return (

                    <footer className='footer'>
                        <div>
                            <img src='https://www.cannondaleexperts.com/assets/images/artwork/cannondale-experts-logo.jpg' alt="logo" className="app-logo" />
                        </div>
                        <div className="menus">
                            <div className="footerColumns">Shop
                            <ul>
                                    <li>Bikes</li>
                                    <li>Gear</li>
                                    <li>Parts</li>
                                    <li>Accessories</li>
                                    <li>Blind Box</li>
                                    <li>Deals</li>
                                </ul>
                            </div>
                            <div className="footerColumns">Company
                            <ul>
                                    <li>About Us</li>
                                    <li>Infinite Cycles</li>
                                    <li>My Account</li>
                                    <li>Shipping</li>
                                </ul>
                            </div>
                            <div className="footerColumns">Support
                            <ul>
                                    <li>Financing</li>
                                    <li>Terms and Conditions</li>
                                    <li>Contact Us</li>
                                    <li>Parts By Model</li>
                                </ul>
                            </div>
                        </div>
                    </footer>
            )
        }
        return (
            <div></div>
        )

    }
}
export default HomeFooter;