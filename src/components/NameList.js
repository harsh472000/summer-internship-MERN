import React from 'react'

function NameList() {
    const persons= [{
        id:1,
        name:'harsh',
        skill:'react'
    },
    {
        id:2,
        name:'bhavesh',
        skill:'angular'
    },{
        id:3,
        name:'bhavin',
        skill:'HTML'
    }]
    const personList= persons.map(person=><h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>)
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
