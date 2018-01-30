import React, { Component } from 'react';
import ProductRows from './ProductRows';


class ComponentBody extends Component {
    constructor() {
        super();
        this.state = {
            page: ''
        }
    }

    render() {
        return (
            <div>
                <div className='titleOfPage'>
                    <h2>{this.props.match.params.type.toUpperCase()}</h2>
                </div>
                <div className='mainDiv'>
                        <ProductRows type={this.props.match.params.type}
                            subType={this.props.match.params.subType} />
                 </div>
                <div className='bgColor'></div>
            
            </div>
        )

    }
}

export default ComponentBody;