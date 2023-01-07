import { useEffect, useState } from "react"

//1. useEffect(callback)
//- Goi callback moi khi component re-render
//- Goi callback sau khi component them element vao DOM
//2. useEffect(callback, [])
//- Chi goi callback 1 lan sau khi component mounted
//3. useEffect(callback, [deps])
//- Callback se duoc goi moi khi deps thay doi

//-----
//1. Callback luon duoc goi sau khi component mounted

function Content(){
    
    const [countDown, setCountDown] = useState(180)

    useEffect(() => {
        setInterval(() => {
            setCountDown(countDown - 1)
            console.log('countDown', countDown);
        }, 1000)
    }, [])
    
    return (
        <div>
            <h1>{countDown}</h1>            
        </div>
    )
}

export default Content