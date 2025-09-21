
import { useState } from "react"


export default function Counter(){

    const [count ,setCount] = useState(0);

    const handleAdd =() =>{
        const cnt = count + 1;
        setCount(cnt)
    }

    const counterStyle = {
        border: '2px solid red',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={counterStyle}>
            <h3> Count : {count} </h3>
            <button onClick={handleAdd}> Add</button>
        </div>
    )
}