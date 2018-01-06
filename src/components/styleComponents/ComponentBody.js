import React, { Component } from 'react';
import ProductRows from './ProductRows';

class ComponentBody extends Component {
   
    render() {
        return (
            <div>

                <div className='right_pic'>
                    <ProductRows/>
                    <div className='titleOfPage'>
                        <h2>{this.props.title}</h2>
                    </div>
                </div>
            </div>
        )

    }
}

export default ComponentBody;