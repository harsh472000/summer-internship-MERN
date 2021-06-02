import React from 'react'

// function Greet(){
//     return <h1>jay sardar</h1>
// }

// const Greet = (pros)=><h1>hello harsh</h1>

const Greet = props=>{
    return (<div><h1>Hello {props.name} a.k.a {props.heroName}</h1>{props.children}</div>)
}

export default Greet;