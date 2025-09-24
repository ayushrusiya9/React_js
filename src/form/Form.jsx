import { useState } from "react";

const App = ()=>{
    const [val,setval] = useState()
    const change = (e)=>{
        console.log(e.target.value);
        setval(e.target.value)
    }
    return (
        <>
            <h1>Form</h1>   
            <input type="text" onChange={change} />
            <h1>{val}</h1>
        </>
    )

}

export default App
