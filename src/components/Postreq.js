import React, { Component } from 'react'
import axios from 'axios'

class Postreq extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }
    
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error =>{
            console.log(error)
        })
    }

    render() {
        const {posts} = this.state
        return  (
            <div>
                <h2>List of posts</h2>
                {
                    posts.length?
                    posts.map(posts=><div key={posts.id}>{posts.title}</div>):
                    null
                }
            </div>
        )
    }
}

export default Postreq
