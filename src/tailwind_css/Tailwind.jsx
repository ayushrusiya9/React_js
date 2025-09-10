import React from "react";
import './tailwind.css'

const App = () =>{
    return(
        <>
        <h1>ayush</h1>
        <div className="bg-red-500 border border-amber-950 ">My name is ayush</div>
        <div className="flex justify-between items-center ">
            <p>helllo</p>
            <p className="border w-20 p-2">hiii</p>
            <p>bye</p>
        </div>
        </>  
    )
}

export default App;