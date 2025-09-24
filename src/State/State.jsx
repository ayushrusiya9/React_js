import React,{useState} from "react"

const App =()=>{
    const sayHi = (n)=>{
        alert("Hello "+n)
    }


    const [count,setcount] = useState(0)
    const [myName,setmyName] = useState("Ayush")

    const changeName = ()=>{
    
        setmyName("Ankit")
    }
    let Inc = ()=>{
        setcount(count+1)
    }
    let Dec = ()=>{
        if(count <= 0){
            // count = 0
            return 
        }
        setcount(count-1)
        
    }

    return (
        <>
            {/* <button onClick={sayHi}>Click me</button> */}
            {/* <button onClick={()=>{alert('Hello')}}>Click me</button> */}
            <button onClick={()=>sayHi('AYUSH')}>Click me</button>
            <h1>{count}</h1>
            <button onClick={Inc}>Increament</button>
            <button onClick={Dec}>Decreament</button>
            <h1>{myName}</h1>
            <button onClick={changeName}>Click</button>
        </>
    )
}

export default App