import React, { Component } from 'react';
import ComponentBody from '../styleComponents/ComponentBody';
import axios from 'axios';

class Mountain extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    displayInfo(){
        axios.get('/api/mountains').then(res => {

        })
    }

    render() {
        return (
            <div>

                <ComponentBody title="Mountain" />
                
            </div>

        )

    }
}

export default Mountain;