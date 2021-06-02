import React, { Component } from 'react'
import FRInput from './FRInput'

class FRparent extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef=React.createRef()
    }
    
    clickHandler = ()=>{
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <FRInput ref={this.inputRef} />
                <button onClick={this.clickHandler}>focus me</button>
            </div>
        )
    }
}

export default FRparent
