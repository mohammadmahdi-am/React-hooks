import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) =>{
        console.log("mouse event")
        setX(e.clientX)
        setY(e.clientY)

    }

    useEffect(()=>{
        console.log('useeffect called')
        window.addEventListener("mousemove",logMousePosition)
    },[])

    useEffect(() => {
        return ()=>{
            window.removeEventListener("mousemove",logMousePosition)
        }
    })
    return (
        <div>
            <h1>

            
            mouseX - {x}  
            <br/>
            mouseY - {y}
            </h1>
        </div>
    )
}

export default HookMouse
