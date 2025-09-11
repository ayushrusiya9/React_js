import React from "react";
import './tailwind.css'

const App = () =>{
    return(
        <>
        <h1>ayush</h1>
        <div className="bg-red-500 border border-amber-950 ">My name is ayush</div>
        <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-[url(https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=)] bg-no-bg-no-repeat bg-bg-cover">
            <div className="w-60 h-60 border"></div>
            <div className="w-60 h-60 border"></div>
            <div className="w-60 h-60 border"></div>
            <div className="w-60 h-60 border"></div>
            <div className="w-60 h-60 border"></div>
            <div className="w-60 h-60 border"></div>
        </div>
        </>  
    )
}

export default App;