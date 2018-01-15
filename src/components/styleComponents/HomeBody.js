import React, { Component } from 'react';
import HomeFooter from './HomeFooter';
import '../../styles/footer.css'
import Header from './Header';

class HomeBody extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    handleClick = () => {
        this.setState({
            show: !this.state.show
        })

    }


    render() {
        return (
            <div>

                <div className='main_pic'>

                    <div className="homeText">
                        <h1>Thanks for visiting the Cannondale Experts,</h1>
                        <p>your source for hard to find original Cannondale parts, tools,
                                and accessories. Our mission is to stock every available spare
                                part for every Cannondale bicycle made in the past 10 years.
                                We'll provide as many tech documents, graphics, and specs
                                possible from Cannondale. We are willing to answer any
                                question you have about your Cannondale.

                        </p>

                    </div>

                    <div>

                    </div>
                    <div onClick={this.handleClick}
                        className={this.state.show ?
                            'footer_tab click1' :
                            'footer_tab'}>
                        <div className='buttDiv'>
                            <h3>More About Cdale Experts</h3>
                        </div>
                        <div className="buttDiv">
                            <span className="hamburger"></span>
                            <span className="hamburger"></span>
                            <span className="hamburger"></span>
                        </div>
                    </div>

                </div>
                <HomeFooter show={this.state.show} />

            </div>

        )

    }
}

export default HomeBody;