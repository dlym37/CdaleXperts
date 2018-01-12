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
                    <div className="productBox">
                        <div className="picDiv"></div>
                        <div>Title: Cannondale Habit 3{}</div>
                        {/* need to grab title above and price below from the db */}
                        <div>Price: $3800{}</div>
                    </div>
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