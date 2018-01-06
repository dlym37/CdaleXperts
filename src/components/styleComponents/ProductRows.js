import React, { Component } from 'react';
import '../../styles/productRows.css'

export default class ProductRows extends Component {
    render() {
        return (
            <div className='mainDiv'>
                <div className="filterRow">
                    <div className="filterBox">
                        <h4>Filter options: </h4>
                            <ul className="filterList">
                                <li>Category:</li>
                                <li>Price:</li>
                                <li>Size:</li>
                            </ul>
                            <hr></hr>
                       
                    </div>
                </div>

                <div className="productRow">
                    <div className="productBox"></div>
                    <div className="productBox"></div>
                    <div className="productBox"></div>
                </div>
                <div className="productRow">
                    <div className="productBox"></div>
                    <div className="productBox"></div>
                    <div className="productBox"></div>
                </div>
                <div className="productRow">
                    <div className="productBox"></div>
                    <div className="productBox"></div>
                    <div className="productBox"></div>
                </div>
            </div>
        )
    }
}