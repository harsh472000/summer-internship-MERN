import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"hello"
        }
    }
    clickHandler(){
        this.setState({
            message:"jay sardar"   
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>click</button>
            </div>
        )
    }
}

export default EventBind
