import React, { Component } from 'react';
import '../../styles/productRows.css'
import axios from 'axios';

export default class ProductRows extends Component {
    constructor() {
        super();
        this.state = {
            products: []
            
        }
    }
    componentDidMount() {
        console.log(this.props.type);
        console.log(this.props.subType);

        const {type, subType} = this.props
        axios.get('/api/'+ type + '/' + subType).then(res => {
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
                    <div className='bike-pic'>
                        <img src={element.picture} alt="mountain" width="350px" />
                    </div>
                    <h4>Title: {element.brand + " " + element.model + " " + element.modelnum}</h4>
                    <p>Price: {"$" + element.price}</p>
                </div>
            )
        })


        return (
            <div className='mainDiv'>
                {/* <div className="filterRow">
                    <div className="filterBox">
                        <h4>Filter options: </h4>
                        <ul className="filterList">
                            <li>Category:</li>
                            <li>Price:</li>
                            <li>Size:</li>
                        </ul>
                        <hr></hr>

                    </div>
                </div> */}

                <div className="product-cont">
                    {bike}
                </div>

            </div>
        )
    }
}