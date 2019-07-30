import React, { Component } from 'react'
import Home from './pages/Home.page'
// import Router from './routes'
import {connect} from 'react-redux'

class App extends Component {
    render() {
        // console.log(this.props.state); // eslint-disable-line
        return <Home />
        // return <Router />
    }
}

export default connect(null, null)(App)