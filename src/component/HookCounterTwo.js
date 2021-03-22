import React from 'react'
import {useState} from 'react'
function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const incrementFive = () =>{
        for(let i=0;i<5;i++){
            setCount(prevCount => prevCount + 1 )
        }
    }
    return (
        <div>
            Count : {count}
            <button onClick={()=>{setCount(0)}}>Reset</button>
            <button onClick={()=>{setCount(count + 1)}}>increment</button>
            <button onClick={()=>{setCount(prevCount => prevCount - 1)}}>decrement</button>
            <button onClick={()=>{incrementFive()}}>incerement 5</button>
        </div>
    )
}

export default HookCounterTwo
