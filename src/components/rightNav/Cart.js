import React, { Component } from 'react';
import CartStyle from '../styleComponents/CartStyle'
import axios from 'axios';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            subTotal: 0,
            tax: 0,
            total: 0
        }
    }

    removeFromCart(i) {
        console.log(i);
        axios.delete('/api/cart/remove', {
            index: i
        }).then(resp => {
            axios.get('/api/cart/data').then(({ data }) => {
                // console.log(data);
                this.setState({
                    products: data

                })
            })
        })
    }

    componentDidMount() {
        axios.get('/api/cart/data').then(({ data }) => {
            // console.log(data);
            this.setState({
                products: data

            })
        })

    }

    render() {
        const total = this.state.tax + this.state.subTotal;


        const cartItem = this.state.products.map((e, i) => {
            // console.log(this.state.products);
            // console.log(e);
            const sub = e.price * e.qty;
            this.state.subTotal += sub;
            const tax = sub * .08;
            this.state.tax += tax;
            this.state.total = this.state.tax + this.state.subTotal;
            return (
                <div key={i} className="products-list">
                    <div className='product-section'>
                        <img className='img' src={e.picture} />
                        <div className='product-info-sub'>
                            <div className='product-title'>{e.brand + " " + e.model + " "}
                                {e.modelnum ? e.modelnum : e.drivetrain}</div>
                            <div className='product-title'>Price: {e.price}{}</div>
                            <div className='product-section-sub'>
                                <div className='qty'>Qty: </div>
                                <input placeholder={e.qty} />
                            </div>
                            <button className='remove-butt' onClick={() => this.removeFromCart(i)}>Remove From Cart</button>
                        </div>
                    </div>
                    <hr className='hr'></hr>
                </div>


            )
        })
        return (
            <div className={this.state.products.length > 0 ? 'big-div-with' : 'big-div-without'}>
                <h1 className={this.state.products.length > 0 ? 'none' : 'h1'}>Nothing Added to cart</h1>
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
                        <button className='checkout-butt'>Checkout</button>
                    </div>
                </div>
            </div>
        )

    }
}

export default Cart