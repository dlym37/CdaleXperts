import React, { Component } from 'react';
import '../../styles/contactUs.css';

class ContactUs extends Component {


    render() {
        return (
            <div className='contact-pic1'>
                <div className='contact-text-main'>
                    <h1>Contact Us</h1>
                    <p>Our mission is to stock every available spare
                        part for every Cannondale bicycle made in the past
                        10 years. We'll provide as many tech documents,
                        graphics, and specs possible from Cannondale.
                        We are willing to answer any question you have
                        about your Cannondale.</p>
                </div>
                <div className='contact-info'>
                    <div className='contact-section'>
                        <div className='logo-stuff logo1' ></div>
                        <div>Questions about purchase</div>
                    </div>
                    <div className='contact-section'>
                        <img className='logo-stuff logo22'/>
                        <div>Questions about parts</div>
                    </div>
                    <div className='contact-section'>
                        <img />
                        <div>Questions about servicing</div>
                    </div>


                </div>
            </div>
        )
    }
}

export default ContactUs;