import React, { Component } from 'react';
import '../../styles/product.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ProductBody extends Component {
    constructor() {
        super();
        this.state = {
            product: [],
            quantity: 1

        }
        this.updateCart = this.updateCart.bind(this);
    }
    updateQuantity(qty) {
        this.setState({
            quantity: qty
        })
        console.log(this.state.product[0].id);
    }
    updateCart() {

        const { gearid, type } = this.state.product[0]
        const { quantity } = this.state;
        axios.put('/api/quantity', {
            productId: gearid,
            qty: quantity,
            type: type
        })
    }
    // alert(){
    //     alert('CONTINUE TO CHECKOUT, AND LETS GO SHRED!');
    // }



    componentDidMount() {
        const { id, type } = this.props.match.params
        console.log('anything');

        axios.get('/api/product/' + type + '/' + id).then(res => {
            console.log(res);
            this.setState({
                product: res.data
            })
        })
    }
    componentWillReceiveProps(nextProps) {
        const { id, type } = nextProps


        axios.get('/api/product/' + type + '/' + id).then(res => {
            // console.log(res);
            this.setState({
                product: res.data
            })
        })
    }


    render() {
        var productInfo = this.state.product.map((element, index) => {
            // console.log(element);
            return (
                <div key={index}>
                    <div className='title-of-bike'>{element.title}</div>
                    <div className='title-of-bike'>Price: ${element.price - element.discount}</div>
                    <div key={index} className='tree-pic flex2'>
                        <div className='flex'>
                            <img src={element.picture} className='product-image' />
                            <div className='info-check'>
                                <div className='product-info'>
                                    <div>
                                        <div>Retail Price: ${element.price}</div>
                                        <br />
                                        <div>Your Savings: ${element.discount}</div>
                                        <br />
                                        <div>Final Price: ${element.price - element.discount}</div>
                                        <br />
                                        <br />
                                        <div>Color: {element.color}</div>
                                        <br />
                                        <div>Gender: {element.gender}</div>
                                        <br />
                                        <div>Type: {element.biketype} </div>
                                        <br />
                                        <div>Part Number: {element.partnumber} </div>
                                    </div>
                                    <div className='adding'>
                                        <div >
                                            <h1>Qty:</h1>
                                            <input placeholder='1' onChange={(e) => this.updateQuantity(e.target.value)} />
                                        </div>

                                        <button className='add-to-cart' onClick={this.updateCart} >Add to Cart</button>
                                    </div>
                                </div>
                                <div className='checkout-div'>
                                    <Link to='/cart'><button className='checkout'>Proceed to Checkout</button></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        })


        return (
            <div>

                <div >
                    {productInfo}
                </div>
            </div>
        )
    }
}
