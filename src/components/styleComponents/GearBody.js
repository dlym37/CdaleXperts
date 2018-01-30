import React, { Component } from 'react';
import GearRows from './GearRows';


class GearBody extends Component {
    constructor() {
        super();
        this.state = {
            page: ''
        }
    }

    render() {
        return (
            <div >
                <div className='titleOfPage'>
                    <h2>GEAR</h2>
                </div>
                    <div className='mainDiv'>
                        <GearRows type={this.props.match.params.type}
                            subType={this.props.match.params.subType} />
                    </div>
                <div className='bgColor'></div>

            </div>
        )

    }
}

export default GearBody;