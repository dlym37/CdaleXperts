import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css'
import HomeBody from './HomeBody';
import scalpel from '../../images/scalpel.jpg';
import habit from '../../images/habit.jpg';
import trigger from '../../images/trigger.jpg';
import jekyll from '../../images/jekyll.jpg';


function HomeNav() {


    return (
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
                        <Link to="/mountain" className='nav-title'> <div >Mountain</div>
                        </Link>
                        <div className="sub-menu sub-menu-imgs" >
                            <div className='backdrop'>
                                <img className="sub-menu-item" src={scalpel} alt='scalpel' />
                                <img className="sub-menu-item" src={habit} alt='habit' />
                                <img className="sub-menu-item" src={trigger} alt='trigger' />
                                <img className="sub-menu-item" src={jekyll} alt='jekyll' />
                            </div>

                        </div>
                    </div>
                    <div className='nav-item'>
                        <Link to="/road" className='nav-title'> <div >Road</div>
                        </Link>
                        <div className="sub-menu sub-menu-imgs" >
                            <div className='backdrop'>
                                <img className="sub-menu-item" src={scalpel} alt='scalpel' />
                                <img className="sub-menu-item" src={habit} alt='habit' />
                                <img className="sub-menu-item" src={trigger} alt='trigger' />
                                <img className="sub-menu-item" src={jekyll} alt='jekyll' />
                            </div>

                        </div>
                    </div>
                    <div className='nav-item'>
                        <Link to="/gear" className='nav-title'> <div>Gear</div>
                        </Link>
                        <div className="sub-menu sub-menu-imgs" >
                            <div className='backdrop'>
                                <img className="sub-menu-item" src={scalpel} alt='scalpel' />
                                <img className="sub-menu-item" src={habit} alt='habit' />
                                <img className="sub-menu-item" src={trigger} alt='trigger' />
                                <img className="sub-menu-item" src={jekyll} alt='jekyll' />
                            </div>

                        </div>
                    </div>
                    <div className='nav-item'>
                        <Link to="/parts" className='nav-title'> <div>Parts</div>
                        </Link>
                        <div className="sub-menu sub-menu-imgs" >
                            <div className='backdrop'>
                                <img className="sub-menu-item" src={scalpel} alt='scalpel' />
                                <img className="sub-menu-item" src={habit} alt='habit' />
                                <img className="sub-menu-item" src={trigger} alt='trigger' />
                                <img className="sub-menu-item" src={jekyll} alt='jekyll' />
                            </div>

                        </div>
                    </div>
                    <div className='nav-item'>
                        <Link to="/accessories" className='nav-title'> <div >Accessories</div>
                        </Link>
                        <div className="sub-menu sub-menu-imgs" >
                            <div className='backdrop'>
                                <img className="sub-menu-item" src={scalpel} alt='scalpel' />
                                <img className="sub-menu-item" src={habit} alt='habit' />
                                <img className="sub-menu-item" src={trigger} alt='trigger' />
                                <img className="sub-menu-item" src={jekyll} alt='jekyll' />
                            </div>

                        </div>
                    </div>
                    
                </nav>
                <ul className="navUl">
                    <div to="/search"><li>Search</li></div>
                    <div to="/myAccount"><li>My Account</li></div>
                    <div to="/cart"><li>Cart</li></div>
                </ul>
            </header>
            {/* <NavOptions
                    type={this.state.submenuType}
                    handleMountain={this.state.handleMountain}
                    className='setup' /> */}
        </div>

    )

}
export default HomeNav;



