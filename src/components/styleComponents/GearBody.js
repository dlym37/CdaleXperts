import React, { Component } from 'react';
import GearRows from './GearRows';
import { Parallax } from 'react-parallax';


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
                {/* <Parallax strength={10}> */}
                    <div className='tree-pic background'>
                        <GearRows type={this.props.match.params.type}
                            subType={this.props.match.params.subType} />
                    </div>
                 {/* </Parallax> */}
                <div className='bgColor'></div>

            </div>
        )

    }
}

export default GearBody;