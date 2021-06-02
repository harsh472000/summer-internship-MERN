import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HOclickcounter extends Component {

    render() {
        const {count, incrementCount} = this.props
        return <button onClick={incrementCount}>click {count} times</button>
    }
}

export default UpdatedComponent(HOclickcounter)
