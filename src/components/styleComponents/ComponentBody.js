import React, { Component } from 'react';
import ProductRows from './ProductRows';
import { Parallax } from 'react-parallax';


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
                {/* <Parallax strength={10}> */}
                        <ProductRows type={this.props.match.params.type}
                            subType={this.props.match.params.subType} />
                 {/* </Parallax> */}
                 </div>
                <div className='bgColor'></div>
            
            </div>
        )

    }
}

export default ComponentBody;