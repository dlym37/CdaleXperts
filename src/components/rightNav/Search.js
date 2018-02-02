import React, { Component } from 'react';
import ComponentBody from '../styleComponents/ComponentBody';
import {connect} from 'react-redux';
import '../../styles/search.css';

class Search extends Component {
    constructor(){
        super();
        this.state={
            products: []
        }
    }
   
    componentDidMount(){
        this.props.searchData;
    }
    render() {
        console.log('search data', this.props.searchData);
        const products = this.props.searchData.map((e, i) => {
            return (
                <div key={i} className='search-box'>
                    <div className='search-pic'>
                        <img src={e.picture} alt='picture' className='search-picture'/>
                    </div>
                    <div>Title: {e.title}</div>
                    <div>Price: ${e.price}</div>
                </div>
            )

            
        })
        return (
            <div className="search-cont">

                {products}
                
            </div>

        )

    }
}

function mapStateToProps(state){
    console.log('what????');
    return {
        searchData: state.searchData
    }
}

export default connect(mapStateToProps, null)(Search);