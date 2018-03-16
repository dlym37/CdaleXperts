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
        this.handlePricing = this.handlePricing.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleFiltering = this.handleFiltering.bind(this);
    }

    handlePricing(setting, value) {
        this.setState({
            [setting]: value
        })
    }

    handleSelect(field, value) {
        // console.log('filter state', this.state)
        this.setState({
            [field]: value
        })
    }
    handleFiltering(gear, index) {
        if (gear.price * 100 <= Math.floor(Number(this.state.min) * 100))
            return false;
        if (this.state.max !== 0 && this.state.max !== '' && gear.price >= Number(this.state.max))
            return false;
        if (gear.subtype !== this.state.gear && this.state.gear !== 'all')
            return false;
        if (gear.gender !== this.state.gender && this.state.gender !== 'all')
            return false;
        if (gear.biketype !== this.state.bikeType && this.state.bikeType !== 'all')
            return false;

        return true;
    }
    componentDidMount() {
        const { type } = this.props


        axios.get('/api/gear/' + type).then(res => {
            this.setState({
                products: res.data
            })
        })
    }
    componentWillReceiveProps(nextProps) {
        const { type } = nextProps

        axios.get('/api/' + type).then(res => {
            this.setState({
                products: res.data
            })
        })
    }

    render() {
        const gear = this.state.products.filter(this.handleFiltering).map((element, index) => {
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
            <div className='tree-pic'>
                <div className='filter-row'>
                    <div className='filter-box'>
                        <div className='filter-title'>
                            <h1>Filter Options:</h1>
                        </div>
                        <div>
                            <div className='filter-option wrap'>
                                <h2>Price:</h2>
                                <div className='row-reverse'>
                                    <input placeholder='Min' className='price-inputs' onChange={(e) => this.handlePricing('min', e.target.value)} />
                                    <input placeholder='Max' className='price-inputs' onChange={(e) => this.handlePricing('max', e.target.value)} />
                                </div>
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
                                    <option value='all'>All</option>
                                    <option value='Womens'>Women's</option>
                                    <option value='Mens'>Men's</option>
                                </select>
                            </div>
                            <div className='filter-option'>
                                <h2>Biking Type:</h2>
                                <select className='select-options' onChange={(e) => this.handleSelect('bikeType', e.target.value)}>
                                    <option value='all'>All</option>
                                    <option value='mountain'>Mountain</option>
                                    <option value='road'>Road</option>
                                </select>
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