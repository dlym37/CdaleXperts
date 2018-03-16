import React, { Component } from 'react';
import '../../styles/product.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class BikesBody extends Component {
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
    }
    updateCart() {

        const { id, type } = this.state.product[0]
        const { quantity } = this.state;
        axios.put('/api/quantity', {
            productId: id,
            qty: quantity,
            type: type
        })
    }
    alert(){
        alert('CONTINUE TO CHECKOUT, AND LETS GO SHRED!');
    }



    componentDidMount() {
        const { id, type } = this.props.match.params

        axios.get('/api/bike/' + type + '/' + id).then(res => {
            this.setState({
                product: res.data
            })
        })
    }
    componentWillReceiveProps(nextProps) {
        const { id, type } = nextProps


        axios.get('/api/bike/' + type + '/' + id).then(res => {
            this.setState({
                product: res.data
            })
        })
    }


    render() {
        var productInfo = this.state.product.map((element, index) => {
            return (
                <div key={index}>
                    <div className='title-of-bike'>{element.brand + ' ' + element.model + ' '} {element.modelnum ? element.modelnum : element.drivetrain}</div>
                    <div className='title-of-bike'>Price: ${element.price}</div>
                    <div key={index} className='tree-pic flex2'>
                        <div className='flex'>
                            <img src={element.picture} alt='bike' className='bike-image' />
                            <div className='info-check'>
                                <div className='product-info'>
                                    <div>
                                        <div>Frame: {element.frame}</div>
                                        <br />
                                        <div className={element.fork ? '' : 'none'}>Suspension:
                                            <div className='padding'>
                                                <div>Front: {element.fork}</div>
                                                <div>Rear: {element.shock}</div>
                                            </div>
                                        </div>
                                        <div>Drivetrain:
                                <div className='padding'>
                                                <div>Front Derailleur: {element.frontder} </div>
                                                <div>Rear Derailleur: {element.rearder}</div>
                                                <div>Shifters: {element.shifters}</div>
                                                <div>Bottom Bracket: {element.bb}</div>
                                            </div>
                                        </div>
                                        <div>Wheels:
                                <div className='padding'>
                                                <div>Brakes: {element.brakes}</div>
                                                <div>Rims: {element.wheels}</div>
                                                <div>Tires: {element.tires}</div>
                                            </div>
                                        </div>
                                        <div>Cockpit:
                                <div className='padding'>
                                                <div>Handlebar: {element.handlebar}</div>
                                                <div>Stem: {element.stem}</div>
                                                <div>Headset: {element.headset}</div>
                                                <div>Saddle: {element.saddle}</div>
                                                <div>Seatpost: {element.seatpost}</div>
                                            </div>
                                        </div>

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
