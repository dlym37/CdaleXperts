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

import {connect} from 'react-redux';
import {changeHamClick, getUserInfo} from '../../ducks/reducer';


class HomeNav extends Component {
    constructor() {
        super();
        this.state = {
            myAcct: false,
            logText: 'Login',
            searching: false,
            hamMenu: false
        }
        this.handleAccount = this.handleAccount.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleHam = this.handleHam.bind(this);

    }
    handleAccount(user) {
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
    handleSearch() {
        if (this.state.searching === false) {
            this.setState({
                searching: true
            })
        } else {
            this.setState({
                searching: false
            })
        }
    }
    handleHam() {
        if (this.state.hamMenu === false) {
            this.setState({
                hamMenu: true
            })
        } else {
            this.setState({
                hamMenu: false
            })
        }
    }

   componentDidMount(){
    this.props.getUserInfo();
    
    }

    render() {
        const {hamClick, user} = this.props
        // console.log('render user', user);
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <div className="buttDiv2" onClick={this.props.changeHamClick}>
                            <span className="hamburger"></span>
                            <span className="hamburger"></span>
                            <span className="hamburger"></span>
                        </div>
                        <Link to="/">
                            <img src='https://www.cannondaleexperts.com/assets/images/artwork/cannondale-experts-logo.jpg' className="App-logo" alt="logo" />
                        </Link>
                        <nav className={this.state.searching ? 'navOff' : ''}>
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
                                <Link to="/gear/all" className='nav-title'> <div >Gear</div>
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
                        <input placeholder='Search' className=
                            {this.state.searching ? 'searchField' : 'searchField searchOff'} />
                        <ul className="navUl">
                            <li className='search' onClick={this.handleSearch}>Search</li>
                            <li className='accountText' onClick={() => this.handleAccount(user)}>My Account</li>
                            <Link to="/cart"><li>Cart</li></Link>
                        </ul>
                    </header>

                </div>
                <div className={hamClick ? 'hamNav hamOn' : 'hamNav'}>
                    <nav className='hamList'>
                        <div className='hamOption'>
                        <Link to="/bikes/mountain/all"><div>Mountain</div></Link>
                            <div className='hamOption-menu'>
                            <Link to="/bikes/mountain/cross-country"><div className='hamOption-menu-sub'>Cross-Country</div></Link>
                            <Link to="/bikes/mountain/trail"> <div className='hamOption-menu-sub'>Trail</div></Link>
                            <Link to="/bikes/mountain/all-mountain"> <div className='hamOption-menu-sub'>All-Mountain</div></Link>
                            <Link to="/bikes/mountain/enduro"> <div className='hamOption-menu-sub'>Enduro</div></Link>
                            </div>
                        </div>
                        <div className='hamOption'>
                        <Link to="/bikes/road/all"><div>Road</div></Link>
                            <div className='hamOption-menu'>
                            <Link to="/bikes/road/endurance"> <div className='hamOption-menu-sub'>Endurance</div></Link>
                            <Link to="/bikes/road/race-elite"> <div className='hamOption-menu-sub'>Elite-Race</div></Link>
                            <Link to="/bikes/road/race"> <div className='hamOption-menu-sub'>Race</div></Link>
                            <Link to="/bikes/road/other"> <div className='hamOption-menu-sub'>Other</div></Link>
                            </div>
                        </div>
                        <div className='hamOption'>
                        <Link to="/gear"><div>Gear</div></Link>
                            <div className='hamOption-menu'>
                            <Link to="/gear"><div className='hamOption-menu-sub'>Gear</div></Link>
                            <Link to="/gear"><div className='hamOption-menu-sub'>Clothes/Apparel</div></Link>
                            <Link to="/gear"><div className='hamOption-menu-sub'>For Bike</div></Link>
                            </div>
                        </div>
                        <div className='hamOption'>
                        <Link to="/parts"><div>Parts</div></Link>
                            <div className='hamOption-menu'>
                            <Link to="/parts"><div className='hamOption-menu-sub'>Cross-Country</div></Link>
                            <Link to="/parts"> <div className='hamOption-menu-sub'>Trail</div></Link>
                            <Link to="/parts"><div className='hamOption-menu-sub'>All-Mountain</div></Link>
                            <Link to="/parts"> <div className='hamOption-menu-sub'>Enduro</div></Link>
                            </div>
                        </div>
                        <div className='hamOption'>
                        <Link to="/accessories"><div>Accessories</div></Link>
                            <div className='hamOption-menu'>
                            <Link to="/accessories"> <div className='hamOption-menu-sub'>Cross-Country</div></Link>
                            <Link to="/accessories">  <div className='hamOption-menu-sub'>Trail</div></Link>
                            <Link to="/accessories">  <div className='hamOption-menu-sub'>All-Mountain</div></Link>
                            <Link to="/accessories">   <div className='hamOption-menu-sub'>Enduro</div></Link>

                            </div>
                        </div>
                        
                    </nav>
                </div>
                <div className={this.state.myAcct ? 'acct dispBox' : 'acct'}>
                    <h1>My Account</h1>
                    <a href={process.env.REACT_APP_LOGIN} className='logButt'>
                        <div >{user.customerid ? 'Logout': 'Login'}</div>
                    </a>
                </div>
            </div>


        )
    }
}

function mapStateToProps(state){
    return {
        hamClick : state.hamClick,
        user: state.user
    }
}
export default connect( mapStateToProps, {changeHamClick, getUserInfo})(HomeNav);



