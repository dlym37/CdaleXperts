import React, { Component } from 'react';
import CartStyle from '../styleComponents/CartStyle'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import stripe from '../stripeKey';
import { getUserInfo, changeAddress } from '../../ducks/reducer';
import { connect } from 'react-redux';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            subTotal: 0,
            tax: 0,
            total: 0,
            isOpen: false,
            billingaddress: '',
            billingcity: '',
            billingstate: '',
            billingcountry: '',
            billingpostalcode: ''
        }
        this.handleCheckout = this.handleCheckout.bind(this);
        this.handleExit = this.handleExit.bind(this);
        this.sendAddress = this.sendAddress.bind(this);

    }
    //stripe stuff
    onToken = (token) => {
        token.card = void 0;
        axios.post('/api/payment', { token, amount: 100 }).then(response => {
            alert('we are in business')
        });
    }

    removeFromCart(i) {
        axios.delete('/api/cart/remove', {
            data: {
                index: i
            }
        }).then(resp => {
            axios.get('/api/cart/data').then(({ data }) => {
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

    handleAddress(type, value) {
        console.log(type, value);
        this.setState({
            [type]: value
        },
            // console.log('state', this.state)
        )
    }

    sendAddress() {
        // console.log(this.state);
        const { billingaddress,
            billingcity,
            billingcountry,
            billingpostalcode,
            billingstate } = this.state;
        axios.post('/api/address', {
            address: billingaddress,
            city: billingcity,
            country: billingcountry,
            state: billingstate,
            postalcode: billingpostalcode
        })
    }

    componentDidMount() {
        this.props.getUserInfo();
        axios.get(`/api/cart/data`).then(({ data }) => {
            console.log('blah', data);
            this.setState({
                products: data.prod,
                subTotal: data.subTotal,
                tax: data.tax,
                total: data.total
            })
        })

    }


    render() {
        const { address, user } = this.props;
        console.log('user stuff', user);
        const cartItem = this.state.products.map((e, i) => {
            // console.log(this.state.products);
            // console.log(e);

            return (
                <div key={i} className="products-list">
                    <div className='product-section'>
                        <img className={e.id ? 'img' : 'img prod-size'} src={e.picture} alt='product' />
                        <div className='product-info-sub'>
                            <div className='product-title'>{e.id ? e.brand + " " + e.model + " " : e.title}
                                {e.modelnum ? e.modelnum : e.drivetrain}</div>
                            <div className='product-price'>Price: ${e.id ? (e.price * e.qty).toFixed(2) :
                                ((e.price - e.discount) * e.qty).toFixed(2)}</div>
                            <div className='product-section-sub'>
                                <input placeholder={e.qty} onChange={(e) => this.updateQty(e.target.value, i)} />
                                <div className='qty'>Qty: </div>
                            </div>
                            <div className='butt-reverse'>
                                <button className='remove-butt' onClick={() => this.removeFromCart(i)}>Remove From Cart</button>
                            </div>
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
                            <button className='checkout-butt' onClick={this.handleCheckout}>Checkout

                            </button>
                        </div>
                    </div>

                </div>
                <div className={this.state.isOpen ? 'modal focus' : 'modal'}>
                    <h1 className={user.customerid ? '' : 'none'}>Shipping Information:</h1>
                    <div className={user.customerid ? 'none' : 'checkout-options'}>
                        <a href={process.env.REACT_APP_LOGIN} >
                            <button className={this.state.isOpen ? 'checkbutt' : 'none'} >Login</button>
                        </a>
                        <button className={this.state.isOpen ? 'checkbutt' : 'none'} onClick={this.props.changeAddress}>Login As Guest</button>
                    </div>
                    <div className={user.customerid ? 'shipInfo' : 'none'}>
                        <div className='addDiv'>
                            <h3>*Address:</h3>
                            <input value={this.state.billingaddress} onChange={(e) => this.handleAddress('billingaddress', e.target.value)} className='inputs' />
                        </div>
                        <div className='addDiv'>
                            <h3>*City:</h3>
                            <input onChange={(e) => this.handleAddress('billingcity', e.target.value)} className='inputs' />
                        </div>
                        <div className='addDiv'>
                            <h3>*State:</h3>
                            <input onChange={(e) => this.handleAddress('billingstate', e.target.value)} className='inputs' />
                        </div>
                        <div className='addDiv'>
                            <h3>*Country:</h3>
                            <input onChange={(e) => this.handleAddress('billingcountry', e.target.value)} className='inputs' />
                        </div>
                        <div className='addDiv'>
                            <h3>*Zip Code:</h3>
                            <input onChange={(e) => this.handleAddress('billingpostalcode', e.target.value)} className='inputs' />
                        </div>
                        <div className='addDiv'>
                            <h3>*Email:</h3>
                            <input className='inputs' />
                        </div>
                        <div className='addDiv'>
                            <h3>Phone:</h3>
                            <input className='inputs' />
                        </div>
                        <a onClick={this.sendAddress}>
                            <StripeCheckout
                                className={this.state.isOpen ? 'none' : 'stripe'}
                                token={this.onToken}
                                stripeKey={stripe.pub_key}
                                amount={this.state.total.toFixed(2) * 100}
                            />
                        </a>
                    </div>
                    <h6 className={user.customerid ? 'required' : 'none'}>* required fields</h6>
                    <button className={this.state.isOpen ? 'xButt' : 'none'} onClick={this.handleExit}>X</button>
                </div>
            </div>
        )

    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        address: state.address
    }
}

export default connect(mapStateToProps, { getUserInfo, changeAddress })(Cart);