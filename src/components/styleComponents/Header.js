import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css'
import HomeBody from './HomeBody';
import scalpel from '../../images/scalpel.jpg';
import habit from '../../images/habit.jpg';
import trigger from '../../images/trigger.jpg';
import jekyll from '../../images/jekyll.jpg';
import synapse from '../../images/synapse.jpg';
import supersix from '../../images/supersix.jpg';
import caad12 from '../../images/caad12.jpg';
import slate from '../../images/slate.jpg';
import gear from '../../images/gear.jpg';
import clothing from '../../images/clothing.jpg';
import forBike from '../../images/forBike.jpg';


class HomeNav extends Component {
    constructor() {
        super();
        this.state = {
            myAcct: false,
            logText: 'Login'
        }
        this.handleAccount = this.handleAccount.bind(this);
        
    }
    handleAccount() {
        if (this.state.myAcct === false) { 
            this.setState({
                myAcct: true
            })
        } else {
            this.setState({
                myAcct: false
            })
        }
    }

render() {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <div className="buttDiv2">
                        <span className="hamburger"></span>
                        <span className="hamburger"></span>
                        <span className="hamburger"></span>
                    </div>
                    <Link to="/">
                        <img src='https://www.cannondaleexperts.com/assets/images/artwork/cannondale-experts-logo.jpg' className="App-logo" alt="logo" />
                    </Link>
                    <nav>
                        <div className='nav-item'>
                            <Link to="/bikes/mountain/all" className='nav-title'> <div >Mountain</div>
                            </Link>
                            <div className="sub-menu sub-menu-imgs" >
                                <div className='backdrop'>
                                    <div className="sub-menu-item">
                                        <Link to="/bikes/mountain/cross-country" className="sub-menu-item-link"><img className="sub-menu-item-img" src={scalpel} alt='scalpel' /></Link>
                                        <h1 className='sub-menu-item-title'>Cross-Country</h1>
                                    </div>
                                    <div className="sub-menu-item">
                                        <Link to="/bikes/mountain/trail" className="sub-menu-item-link"><img className="sub-menu-item-img" src={habit} alt='habit' /></Link>
                                        <h1 className='sub-menu-item-title'>Trail</h1>
                                    </div>
                                    <div className="sub-menu-item">
                                        <Link to="/bikes/mountain/all-mountain" className="sub-menu-item-link"><img className="sub-menu-item-img" src={trigger} alt='trigger' /></Link>
                                        <h1 className='sub-menu-item-title'>All-Mountain</h1>
                                    </div>
                                    <div className="sub-menu-item">
                                        <Link to="/bikes/mountain/enduro" className="sub-menu-item-link"><img className="sub-menu-item-img" src={jekyll} alt='jekyll' /></Link>
                                        <h1 className='sub-menu-item-title'>Enduro</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='nav-item'>
                            <Link to="/bikes/road/all" className='nav-title'> <div >Road</div>
                            </Link>
                            <div className="sub-menu sub-menu-imgs" >
                                <div className='backdrop'>
                                    <div className="sub-menu-item">
                                        <Link to="/bikes/road/endurance" className="sub-menu-item-link"><img className="sub-menu-item-img" src={synapse} alt='synapse' /></Link>
                                        <h1 className='sub-menu-item-title'>Endurance</h1>
                                    </div>
                                    <div className="sub-menu-item">
                                        <Link to="/bikes/road/race-elite" className="sub-menu-item-link"><img className="sub-menu-item-img" src={supersix} alt='supersix' /></Link>
                                        <h1 className='sub-menu-item-title'>Race Elite</h1>
                                    </div>
                                    <div className="sub-menu-item">
                                        <Link to="/bikes/road/race" className="sub-menu-item-link"><img className="sub-menu-item-img" src={caad12} alt='caad12' /></Link>
                                        <h1 className='sub-menu-item-title'>Race</h1>
                                    </div>
                                    <div className="sub-menu-item">
                                        <Link to="/bikes/road/other" className="sub-menu-item-link"><img className="sub-menu-item-img" src={slate} alt='slate' /></Link>
                                        <h1 className='sub-menu-item-title'>Other</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='nav-item'>
                            <Link to="/gear" className='nav-title'> <div >Gear</div>
                            </Link>
                            <div className="sub-menu sub-menu-imgs" >
                                <div className='backdrop'>
                                    <div className="sub-menu-item">
                                        <Link to="/gear" className="sub-menu-item-link"><img className="sub-menu-item-img" src={gear} alt='gear' /></Link>
                                        <h1 className='sub-menu-item-title'>Gear</h1>
                                    </div>
                                    <div className="sub-menu-item">
                                        <Link to="/gear" className="sub-menu-item-link"><img className="sub-menu-item-img" src={clothing} alt='clothing' /></Link>
                                        <h1 className='sub-menu-item-title'>Clothes/Apparel</h1>
                                    </div>
                                    <div className="sub-menu-item">
                                        <Link to="/gear" className="sub-menu-item-link"><img className="sub-menu-item-img" src={forBike} alt='forBike' /></Link>
                                        <h1 className='sub-menu-item-title'>For Bike</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='nav-item'>
                            <Link to="/parts" className='nav-title'> <div >Parts</div>
                            </Link>
                            <div className="sub-menu sub-menu-imgs" >
                                <div className='backdrop'>
                                    <div className="sub-menu-item">
                                        <Link to="/parts" className="sub-menu-item-link"><img className="sub-menu-item-img" src={scalpel} alt='scalpel' /></Link>
                                        <h1 className='sub-menu-item-title'>Cross-Country</h1>
                                    </div>
                                    <div className="sub-menu-item">
                                        <Link to="/parts" className="sub-menu-item-link"><img className="sub-menu-item-img" src={habit} alt='habit' /></Link>
                                        <h1 className='sub-menu-item-title'>Trail</h1>
                                    </div>
                                    <div className="sub-menu-item">
                                        <Link to="/parts" className="sub-menu-item-link"><img className="sub-menu-item-img" src={trigger} alt='trigger' /></Link>
                                        <h1 className='sub-menu-item-title'>All-parts</h1>
                                    </div>
                                    <div className="sub-menu-item">
                                        <Link to="/parts" className="sub-menu-item-link"><img className="sub-menu-item-img" src={jekyll} alt='jekyll' /></Link>
                                        <h1 className='sub-menu-item-title'>Enduro</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='nav-item'>
                            <Link to="/accessories" className='nav-title'> <div >Accessories</div>
                            </Link>
                            <div className="sub-menu sub-menu-imgs" >
                                <div className='backdrop'>
                                    <div className="sub-menu-item">
                                        <Link to="/accessories" className="sub-menu-item-link"><img className="sub-menu-item-img" src={scalpel} alt='scalpel' /></Link>
                                        <h1 className='sub-menu-item-title'>Cross-Country</h1>
                                    </div>
                                    <div className="sub-menu-item">
                                        <Link to="/accessories" className="sub-menu-item-link"><img className="sub-menu-item-img" src={habit} alt='habit' /></Link>
                                        <h1 className='sub-menu-item-title'>Trail</h1>
                                    </div>
                                    <div className="sub-menu-item">
                                        <Link to="/accessories" className="sub-menu-item-link"><img className="sub-menu-item-img" src={trigger} alt='trigger' /></Link>
                                        <h1 className='sub-menu-item-title'>All-accessories</h1>
                                    </div>
                                    <div className="sub-menu-item">
                                        <Link to="/accessories" className="sub-menu-item-link"><img className="sub-menu-item-img" src={jekyll} alt='jekyll' /></Link>
                                        <h1 className='sub-menu-item-title'>Enduro</h1>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </nav>
                    <ul className="navUl">
                        <Link to="/search"><li>Search</li></Link>
                        <li className='accountText' onClick={this.handleAccount}>My Account</li>
                        <Link to="/cart"><li>Cart</li></Link>
                    </ul>
                </header>

            </div>
            <div className={this.state.myAcct ? 'acct dispBox' : 'acct'}>
                <h1>My Account</h1>
                <button className='logButt'>{this.state.logText}</button>
            </div>
        </div>


    )
}
}
export default HomeNav;



