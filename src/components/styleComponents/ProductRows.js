import React, { Component } from 'react';
import '../../styles/productRows.css'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class ProductRows extends Component {
    constructor() {
        super();
        this.state = {
            products: []

        }
    }
    componentDidMount() {
        const { type, subType } = this.props


        axios.get('/api/' + type + '/' + subType).then(res => {
            console.log(res);
            this.setState({
                products: res.data
            })
        })
    }
    componentWillReceiveProps(nextProps) {
        const { type, subType } = nextProps

        axios.get('/api/' + type + '/' + subType).then(res => {
            console.log(res);
            this.setState({
                products: res.data
            })
        })
    }

    render() {
        const bike = this.state.products.map((element, index) => {
            return (
                <div key={index} className="productBox">
                    <Link to={`/bike/${element.type}/${element.id ? element.id : element.id}`} className='bike-pic'>
                        <img src={element.picture} alt="bikePic" className='picture' />
                    </Link>{/*need to figure out how to pass in the product title in the link source*/}
                    <h4>Title: {element.brand + " " + element.model + " "}
                        {element.modelnum ? element.modelnum : element.drivetrain}</h4>
                    <p className='price'>Price: {"$" + element.price}</p>
                </div>
            )
        })


        return (
            
                <div className='tree-pic'>

                    <div className="product-cont">
                        {bike}
                    </div>
                </div>

        )
    }
}