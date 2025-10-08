import { useEffect } from "react";
import { useState } from "react";

const UseEffect = () => {

    let [count, setcount] = useState(0);

    useEffect(() => {
        console.log("Running");
    },[])

    return (
        <>
            <h1>UseEffect</h1>
            <h1>{count}</h1>
            <button onClick={()=>{setcount(count + 1)}}> Click</button>

        </>
    )
}

export default UseEffect