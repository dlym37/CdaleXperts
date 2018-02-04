import React, { Component } from 'react';
import HomeFooter from './HomeFooter';
import '../../styles/footer.css'
import { connect } from 'react-redux';
import frontWheelFork from '../../images/frontWheelFork.png'
import crank from '../../images/crank.png'
import rearWheel from '../../images/rearWheel.png'
import headset from '../../images/headset.png'
import seat from '../../images/seat.png'
import frame from '../../images/frame.png'
import '../../styles/scalpel.css';


class HomeBody extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            spread: false
        }
    }

    handleClick = () => {
        this.setState({
            show: !this.state.show
        })

    }
    handleBike = () => {
        if (this.state.spread === false) {
            this.setState({
                spread: true
            })
        } else {
            this.setState({
                spread: false
            })
        }
    }


    render() {
        const hamClick = this.props.hamClick;
        return (
            <div>

                <div className={hamClick ? 'main-pic opp' : 'main-pic'} className={this.state.spread ? 'main-pic bike-click' : 'main-pic'}>
                    <div className={this.state.spread ? 'scalpel scalpel-click' : 'scalpel'}>
                        { /* <img src={scalpel2} alt='scalpel 2' /> */}
                        <div className={this.state.spread ? "front-wheel front-wheel-click" : 'front-wheel'}>
                            <img src={frontWheelFork} alt='front wheel' className='size2' />
                        </div>
                        <div className={this.state.spread ? "headset headset-click" : 'headset'}>
                            <img src={headset} alt='headset' className='size2' />
                        </div>
                        <div className={this.state.spread ? 'cranks crank-click' : 'cranks'}>
                            <img src={crank} alt='crank' className='size2' />
                        </div>
                        <div className={this.state.spread ? "seat seat-click" : 'seat'}>
                            <img src={seat} alt='seat' className='size2' />
                        </div>
                        <div className={this.state.spread ? "rear-wheel rear-wheel-click" : 'rear-wheel'}>
                            <img src={rearWheel} alt='rear wheel' className='size2' />
                        </div>
                        <div className={this.state.spread ? "frame frame-click" : 'frame'}>
                            <img src={frame} alt='frame' className='size2' />
                        </div>
                        <div className={this.state.spread ? 'clickMe clickMe-click' : 'clickMe'} onClick={this.handleBike}>Click Me</div>
                        <div className={this.state.spread ? 'infoBox seat-info' : 'none'}>
                            <h1>Saddle:</h1>
                            <h2>Fabric Scoop Flat Race w/ Titanium Rails</h2>
                            <h1>Seatpost:</h1>
                            <h2>RaceFace Aeffect Dropper, 31.6mm, 125/150mm travel</h2>
                        </div>
                        <div className={this.state.spread ? 'infoBox rearWheel-info' : 'none'}>
                            <h1>Rim:</h1>
                            <h2>Stans Notubes ZTR ARCH S1 28hol</h2>
                            <h1>Tire:</h1>
                            <h2>Maxxis Ardent 2.25"</h2>
                            <h1>Rear Derailleur:</h1>
                            <h2>SRAM GX Eagle 12-speed</h2>
                            <h1>Rear Triangle:</h1>
                            <h2>BallisTec Carbon, Zero-Pivot seatstay, carbon Link</h2>
                        </div>
                        <div className={this.state.spread ? 'infoBox crank-info' : 'none'}>
                            <h1>Bottom Bracket:</h1>
                            <h2>Cannondale Alloy PressFit30</h2>
                            <h1>Crank:</h1>
                            <h2>Truvativ Stylo Eagle 6K, 32t</h2>
                        </div>
                        <div className={this.state.spread ? 'infoBox frontWheel-info' : 'none'}>
                            <h1>Fork:</h1>
                            <h2>Fox Float 34, Performance Elite Series, 120mm</h2>
                            <h1>Rim:</h1>
                            <h2>Stans Notubes ZTR ARCH S1 28hole</h2>
                            <h1>Tire:</h1>
                            <h2>Maxxis Ardent 2.4"</h2>
                            <h1>Brake:</h1>
                            <h2>SRAM Level TL hydro disc, 180/180mm, Centerline Rotors</h2>
                        </div>
                        <div className={this.state.spread ? 'infoBox headset-info' : 'none'}>
                            <h1>Handlebar:</h1>
                            <h2>Cannondale C3 riser, Alloy, 4° upsweep, 9° backsweep, 760x15mm</h2>
                            <h1>Stem:</h1>
                            <h2>Cannondale C1, 6061 Alloy, 1-1/8", 60mm, 31.8, 5°</h2>
                            <h1>Headset:</h1>
                            <h2>Cannondale HeadShok Si</h2>
                            <h1>Brake Levers:</h1>
                            <h2>SRAM Level TL</h2>
                            <h1>Shifters:</h1>
                            <h2>SRAM GX Eagle 12-speed Trigger</h2>
                        </div>
                        <div className={this.state.spread ? 'infoBox frame-info' : 'none'}>
                            <h1>Frame:</h1>
                            <h2>Scalpel SE, BallisTec Carbon, Ai Offset</h2>
                            <h1>Rear Shock:</h1>
                            <h2>Fox Float Performance DPS EVOL SV, 3 Position Adjust 115mm Travel</h2>
                        </div>
                    </div>

                    <img src='https://www.cannondaleexperts.com/assets/images/artwork/cannondale-experts-logo.jpg' className="App-logo2" alt="logo" />

                    <div className={this.state.spread ? "homeText noText" : 'homeText'}>
                        <h1>Thanks for visiting the Cannondale Experts,</h1>
                        <p>your source for hard to find original Cannondale parts, tools,
                                and accessories. 

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

function mapStateToProps(state) {
    return {
        hamClick: state.hamClick
    }

}

export default connect(mapStateToProps)(HomeBody);