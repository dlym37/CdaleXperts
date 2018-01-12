import React, { Component } from 'react';
import ProductRows from './ProductRows';

class ComponentBody extends Component {
   
    render() {
        return (
            <div>

                <div className='right_pic'>
                    <div className='titleOfPage'>
                        <h2>{this.props.title}</h2>
                    </div>
                    {<ProductRows/>}
                </div>
            </div>
        )

    }
}

export default ComponentBody;