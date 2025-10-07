import React, { use, useState } from "react";
import MyContext from "./MyContext";
import { useContext } from "react";

const Child = ()=>{
    // const MyData = useContext(MyContext)
    const {MyData,theme,Hobby,numbers} = useContext(MyContext)
    const [click, setclick] =  useState(false)

    // let mode;
    //  if(click == true){
    //     mode = theme.dark;
    //  }else{
    //     mode = theme.light;
    //  }

    const handleClick = () => {
        setclick(!click); 
    }
    
    return (
        <>
        <div style={click?theme.dark:theme.light}></div>
        <button onClick={handleClick}>Click</button>
            <h3>Child</h3>
            {/* <p>My Hobbies are {Hobby.map((e)=><li>{e}</li>)}</p> */}
            <p>My Hobies are {Hobby.map((e) => <li>{e} </li>)}</p>
            <p>Total of number: {numbers[0] + numbers[1]}</p>
            <p>My Name is {MyData.name} and i am {MyData.age} year's old. i am belong from {MyData.city}</p>
        </>
    )
}

export default Child