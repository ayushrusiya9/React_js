import { useRef } from "react";

const App = () =>{
    let nameref = useRef(null);

    const handleClick = () =>{
        nameref.current.focus(); 
        nameref.current.value = "Ayush";
        nameref.current.style.color = "red";
    }

    return(
        <>
            <h1>useRef</h1>
            Name: <input ref={nameref} type="text" placeholder="Enter Your Name..." />
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default App;