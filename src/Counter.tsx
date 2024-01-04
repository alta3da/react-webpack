import { useState } from "react"


export const Counter =() => {
    const [count, setCount] = useState(0)

    return(
        <>
        <button onClick={ () => setCount( prev => prev + 1)}>Clicked {count} times</button>
        </>
    )
}