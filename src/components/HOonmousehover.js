import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HOonmousehover extends Component {
    

    render() {
        const {count, incrementCount} = this.props
        return <h2 onMouseOver={incrementCount}>hover {count} times</h2>
    }
}

export default UpdatedComponent(HOonmousehover)
