import axios from 'axios'
import React,{useState,useEffect} from 'react'

function DataFetchingOne() {
    const[Loading,setLoading] = useState(true)
    const[error,setError] = useState('')
    const[post,setPost] = useState({})
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>{
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error=>{
            setLoading(false)
            setPost({})
            setError('somthing went wrong!')
        })
    },[])
    return (
        <div>
            {Loading ? 'loading..' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne
