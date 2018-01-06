import React, { Component } from 'react';



class NavOptions extends Component {





    render() {

        // const showing= 
        // {
        //     display: {
        //         display: true},
        //     doNot: {
        //         display: false}
        //     }
        if (this.props.mountain) {
            console.log('Hit');
            return (
                <div className="setup">
                    Mountain
                </div>
            )
        } else if (this.props.road) {
            return (
                <div className="setup">
                    Road
                </div>
            )
        }else if (this.props.gear) {
            return (
                <div className="setup">
                    gear
                </div>
            )
        }else if (this.props.parts) {
            return (
                <div className="setup">
                    parts
                </div>
            )
        }else if (this.props.accessories) {
            return (
                <div className="setup">
                    accessories
                </div>
            )
        }
        return (
            <div></div> 
        )

    }
}
export default NavOptions;