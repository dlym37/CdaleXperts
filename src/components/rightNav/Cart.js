import React, { Component } from 'react';
import CartStyle from '../styleComponents/CartStyle'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import stripe from '../stripeKey';
import Modal from 'react-modal';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            subTotal: 0,
            tax: 0,
            total: 0,
            isOpen: false,
            billingaddress : '',
            billingcity : '',
            billingstate : '',
            billingcountry : '',
            billingpostalcode : ''
        }
        this.handleCheckout = this.handleCheckout.bind(this);
        this.handleExit = this.handleExit.bind(this);

    }

    onToken = (token) => {
        token.card = void 0;
        console.log('token', token);
        axios.post('/api/payment', { token, amount: 100 }).then(response => {
            alert('we are in business')
        });
    }

    removeFromCart(i) {
        console.log(i);
        axios.delete('/api/cart/remove', { data : {
            index: i
        }
        }).then(resp => {
            axios.get('/api/cart/data').then(({ data }) => {
                // console.log(data);
                this.setState({
                    products: data.prod,
                    subTotal: data.subTotal,
                    tax: data.tax,
                    total: data.total

                })
            })
        })
    }

    updateQty(val, ind) {
        // if(val > 0){
        axios.put('/api/update/quantity', {
            value: val,
            index: ind
        }).then(resp => {
            axios.get('/api/cart/data').then(({ data }) => {
                // console.log(data);
                this.setState({
                    products: data.prod,
                    subTotal: data.subTotal,
                    tax: data.tax,
                    total: data.total
                })
            })
        })
        // } else if (val <= 0) {
        //     axios.delete('/api/cart/remove', {
        //         index: ind
        //     }).then(resp => {
        //         axios.get('/api/cart/data').then(({ data }) => {
        //             // console.log(data);
        //             this.setState({
        //                 products: data.prod,
        //                 subTotal: data.subTotal,
        //                 tax: data.tax,
        //                 total: data.total

        //             })
        //         })
        //     })
        // }
    }
    handleCheckout() {
        this.setState({
            isOpen: true
        })
    }
    handleExit() {
        this.setState({
            isOpen: false
        })
    }

    handleAddress(type, value){
        this.setState({
            type: value
        })
    }

    componentDidMount() {
        axios.get('/api/cart/data').then(({ data }) => {
            console.log(data);
            this.setState({
                products: data.prod,
                subTotal: data.subTotal,
                tax: data.tax,
                total: data.total

            })
        })

    }


    render() {
        const total = this.state.tax + this.state.subTotal;


        const cartItem = this.state.products.map((e, i) => {
            // console.log(this.state.products);
            // console.log(e);

            return (
                <div key={i} className="products-list">
                    <div className='product-section'>
                        <img className='img' src={e.picture} />
                        <div className='product-info-sub'>
                            <div className='product-title'>{e.brand + " " + e.model + " "}
                                {e.modelnum ? e.modelnum : e.drivetrain}</div>
                            <div className='product-price'>Price: {(e.price * e.qty).toFixed(2)}{}</div>
                            <div className='product-section-sub'>
                                <div className='qty'>Qty: </div>
                                <input placeholder={e.qty} onChange={(e) => this.updateQty(e.target.value, i)} />
                            </div>
                            <button className='remove-butt' onClick={() => this.removeFromCart(i)}>Remove From Cart</button>
                        </div>
                    </div>
                    <hr className='hr'></hr>
                </div>


            )
        })
        return (
            <div className={this.state.isOpen ? 'container' : 'container'} >
                <div className={this.state.products.length > 0 ? 'big-div-with' : 'big-div-without'}
                    className={this.state.isOpen ? 'big-div-without blur' : 'big-div-without'}>
                    <h1 className={this.state.products.length > 0 ? 'none' : 'h1'}>Nothing added to cart, please add or login</h1>
                    <div className={this.state.products.length > 0 ? 'cart-body' : 'none'}>
                        <div className='product-stuff'>
                            {cartItem}
                        </div>
                        <div className="cart-div">
                            <div>Subtotal: ${this.state.subTotal.toFixed(2)} </div>
                            <div className='tax'>Tax: ${this.state.tax.toFixed(2)} </div>
                            <div>Total Price: </div>
                            <div className='total'>${this.state.total.toFixed(2)}</div>
                            <button className='cont-shop-butt'>Continue Shopping</button>
                            <button className='checkout-butt' onClick={this.handleCheckout}>Checkout

                            </button>
                        </div>
                    </div>

                </div>
                <div className={this.state.isOpen ? 'modal focus' : 'modal'}>
                    <h1>Shipping Information:</h1>
                    <div className='shipInfo'>
                        <div className='addDiv'>
                            <h3>*Address:</h3>
                            <input onChange={(e) => this.handleAddress('billingaddress', e.target.value)}className='inputs' />
                        </div>
                        <div className='addDiv'>
                            <h3>*City:</h3>
                            <input onChange={(e) => this.handleAddress('billingcity', e.target.value)}className='inputs' />
                        </div>
                        <div className='addDiv'>
                            <h3>*State:</h3>
                            <input onChange={(e) => this.handleAddress('billingstate', e.target.value)}className='inputs' />
                        </div>
                        <div className='addDiv'>
                            <h3>*Country:</h3>
                            <input onChange={(e) => this.handleAddress('billingcountry', e.target.value)}className='inputs' />
                        </div>
                        <div className='addDiv'>
                            <h3>*Zip Code:</h3>
                            <input onChange={(e) => this.handleAddress('billingpostalcode', e.target.value)}className='inputs' />
                        </div>
                        <div className='addDiv'>
                            <h3>*Email:</h3>
                            <input className='inputs' />
                        </div>
                        <div className='addDiv'>
                            <h3>Phone:</h3>
                            <input className='inputs' />
                        </div>
                    </div>
                    <h6 className='required'>* required fields</h6>
                    <button className='xButt' onClick={this.handleExit}>X</button>
                    <StripeCheckout
                        className='stripe'
                        token={this.onToken}
                        stripeKey={stripe.pub_key}
                        amount={this.state.total.toFixed(2) * 100}
                    />
                </div>
            </div>
        )

    }
}

export default Cart