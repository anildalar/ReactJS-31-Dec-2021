import React, { useState } from 'react'

export default function MyComponent2() {
    //1. State
    //Hook Variables
    const [salary, setSalary] = useState(40000)

    //2. Function
    //Fat Arrow
    let incr = ()=>{
        setSalary( salary + 10000)
    }

    //3. Return Statement
    return (
        <div>
            <button onClick={()=>{ incr(); }}>Make My Increment</button>
            <h1>Your Salary is { salary } </h1>
        </div>
    )
}
