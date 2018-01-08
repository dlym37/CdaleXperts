import React, { Component } from 'react';



class NavOptions extends Component {





    render() {

        if (this.props.mountain) {
            return (
                <div className="setup">Mountain
                    <div className="navBox"></div>
                    <div className="navBox"></div>
                    <div className="navBox"></div>
                    <div className="navBox"></div>
                </div>
            )
        } 
        if (this.props.road) {
            return (
                <div className="setup">
                    Road
                </div>
            )
        }
        if (this.props.gear) {
            return (
                <div className="setup">
                    gear
                </div>
            )
        }
        if (this.props.parts) {
            return (
                <div className="setup">
                    parts
                </div>
            )
        }
        if (this.props.accessories) {
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