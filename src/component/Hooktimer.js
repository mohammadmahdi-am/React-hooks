import React, { useEffect, useState,useRef } from 'react'

function Hooktimer() {
    
    const [timer,setTimer] = useState(0)
    const myref = useRef()
    useEffect(()=>{
        myref.current = setInterval(() => {
            setTimer(prevState =>prevState+1)
            
        }, 1000);
        return ()=>{
            clearInterval(myref.current)

        }
    },[])

    return (
        <div>
            Hook Timer -{timer}
            <button  onClick={()=>clearInterval(myref.current)}>Clear Hook Timer</button>
            
        </div>
    )
}

export default Hooktimer

