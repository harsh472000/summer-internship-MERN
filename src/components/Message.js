import React, {Component} from 'react'

class Message extends Component {

    constructor(){
        super();
        this.state={
            message:'welcome to visitor'
        }
    }

    changeMessage(){
        this.setState({
            message:'thank you for submiting..'
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>submit</button>
            </div>
        )
    }
}

export default Message;