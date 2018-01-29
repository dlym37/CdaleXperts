import React, { Component } from 'react';
import '../../styles/productRows.css'
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../../styles/gear.css';


export default class GearRows extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            max: 0,
            min: 0,
            gear: 'all',
            gender: 'all',
            bikeType: 'all'


        }
    }
    handlePricing(setting, value) {
        if (setting = 'max') {
            this.setState({
                max: value
            })
        } else {
            this.setState({
                min: value
            })
        }
    }
    handleSelect(field, value){
        this.setState({
            field : value
        })
    }
    handleFiltering(){
        axios.get('/api/gear/filter', {
            max: this.state.max,
            min: this.state.min,
            gear: this.state.gear,
            gender: this.state.gender,
            bikeType: this.state.bikeType
        }).then(res => {

        })//Need to do another axios call to get new data
        //need to set products equal to the data that we are getting
        //back to products on state
    }
    componentDidMount() {
        const { type } = this.props


        axios.get('/api/gear/' + type).then(res => {
            console.log(res);
            this.setState({
                products: res.data
            })
        })
    }
    componentWillReceiveProps(nextProps) {
        const { type } = nextProps

        axios.get('/api/' + type).then(res => {
            console.log(res);
            this.setState({
                products: res.data
            })
        })
    }

    render() {
        const gear = this.state.products.map((element, index) => {
            return (
                <div key={index} className="gear-box">
                    <Link to={`/product/${element.type}/${element.gearid}`} className='gear-pic'>
                        <img src={element.picture} alt="gearPic" className='gear-img' />
                    </Link>{/*need to figure out how to pass in the product title in the link source*/}
                    <h4>Title: {element.title + " " + element.color + " "}
                        {element.size ? element.size : null}</h4>
                    <p className='price'>Price: {"$" + element.price}</p>
                </div>
            )
        })


        return (
            <div className='gear-main'>
                <div className='filter-row'>
                    <div className='filter-box'>
                        <div className='filter-title'>
                            <h1>Filter Options:</h1>
                        </div>
                        <div>
                            <div className='filter-option wrap'>
                                <h2>Price:</h2>
                                <input placeholder='Max' className='price-inputs' onChange={(e) => this.handlePricing('max', e.target.value)} />
                                <input placeholder='Min' className='price-inputs' onChange={(e) => this.handlePricing('max', e.target.value)} />
                            </div>
                            <div className='filter-option'>
                                <h2>Gear Type:</h2>
                                <select className='select-options' onChange={(e) => this.handleSelect('gear', e.target.value)}>
                                    <option value='all'>All</option>
                                    <option value='shoes'>Shoes</option>
                                    <option value='clothing'>Clothing/Apparel</option>
                                    <option value='gloves'>Gloves</option>
                                    <option value='sunglasses'>Sunglasses</option>
                                    <option value='packs'>Packs</option>
                                </select>
                            </div>
                            <div className='filter-option' onChange={(e) => this.handleSelect('gender', e.target.value)}>
                                <h2>Gender:</h2>
                                <select className='select-options'>
                                    <option>All</option>
                                    <option value='womens'>Women's</option>
                                    <option value='mens'>Men's</option>
                                </select>
                            </div>
                            <div className='filter-option'>
                                <h2>Bike Type:</h2>
                                <select className='select-options' onChange={(e) => this.handleSelect('bikeType', e.target.value)}>
                                    <option value='all'>All</option>
                                    <option value='mountain'>Mountain</option>
                                    <option value='road'>Road</option>
                                </select>
                            </div>
                            <div className='butt-option'>
                                <button className='filter-butt' onClick={this.handleFiltering}>Filter</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gear-cont">
                    {gear}
                </div>

            </div>
        )
    }
}