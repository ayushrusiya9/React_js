import React from "react";
import MyContext from "./MyContext";
import { useContext } from "react";

const Child = ()=>{
    const MyData = useContext(MyContext)

    return (
        <>
            <h3>Child</h3>
            <p>My Name is {MyData.name} and i am {MyData.age} year's old. i am belong from {MyData.city}</p>
        </>
    )
}

export default Child