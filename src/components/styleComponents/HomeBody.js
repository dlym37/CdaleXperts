import React, { Component } from 'react';
import HomeFooter from './HomeFooter';
import '../../styles/footer.css'

class HomeBody extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    handleClick = () => {
        if (this.state.show === false) {
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
            <div>

                <div className='main_pic'>
                    
                    <div className="home_text">
                        <h1>Thanks for visiting the Cannondale Experts,</h1>
                        <p>your source for hard to find original Cannondale parts, tools,
                                and accessories. Our mission is to stock every available spare
                                part for every Cannondale bicycle made in the past 10 years.
                                We'll provide as many tech documents, graphics, and specs
                                possible from Cannondale. We are willing to answer any
                                question you have about your Cannondale.

                        </p>
                        <button className="footer_tab" onClick={this.handleClick}>
                            <h3 className="label">More About Cdale Experts</h3>
                            <div className="buttDiv">
                                <span className="hamburger"></span>
                                <span className="hamburger"></span>
                                <span className="hamburger"></span>
                            </div>
                        </button>

                    </div>

                    <div>

                    </div>

                </div>
                <HomeFooter show={this.state.show} />

            </div>

        )

    }
}

export default HomeBody;