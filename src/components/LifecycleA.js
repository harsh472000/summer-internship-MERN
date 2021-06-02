import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'harsh'
        }
        console.log('lifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('getderivedfromstatic')
        return null
    }
    componentDidMount(){
        console.log('lifecycleA comoponet did mount')
    }
    render() {
        console.log('lifecycle A render')
        return (
            <div>
                lifecycleA
            </div>
        )
    }
}

export default LifecycleA
