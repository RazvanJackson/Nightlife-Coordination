import React from 'react'

import Header from '../components/Header'
import Search from '../components/Search'
import Boxes from '../components/Boxes'

import { connect } from 'react-redux'

class IndexPage extends React.Component {
    render() {
        return (
            <div id="IndexPage">
                <Header/>
                <Search/>
                <Boxes/> 
            </div>
            
        )
    }
}

export default IndexPage