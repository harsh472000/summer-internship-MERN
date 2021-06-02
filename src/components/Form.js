import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             Commen:'',
             topic:''
        }
    }
    handlerbarUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handlerbarCommentChange=(event)=>{
        this.setState({
            Commen:event.target.value
        })
    }
    handlerbarTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    render() {
        return (
            <form>
            <div>
                <label>Username:-</label>
                <input type="text" value={this.state.username} onChange={this.handlerbarUsernameChange}></input>
            </div>
            <div>
                <label>Comments:-</label>
                <textarea value={this.state.Commen} onChange={this.handlerbarCommentChange}/>
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handlerbarTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="Vue">Vue</option>
                </select>
            </div>
            </form>
        )
    }
}

export default Form
