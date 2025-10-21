import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA';
import "./parent.css"

//step 1: create context
const UserContext = createContext();
// step 2 :  wrap all the element inside the provider
//step 3 : pass value
//step 4: cunsumer ke ander jaake cunsume ker lo 

const ThemeContext = createContext();

const Parent = () => {

    let userData = {
        name:"ayush",
        age:21,
        city:"bhopal"
    }
    // const [user, setUser] =useState(userData);
    const [theme, setTheme] = useState("light")
    return (
        <div>
        {/* <UserContext.Provider value={user}> */}
            <ThemeContext.Provider value={{theme,setTheme}}>
            <div id='userContainer' style={{backgroundColor:theme==="light"?"beige":"black"}}>
                <ChildA />
            </div>
            </ThemeContext.Provider>
        {/* </UserContext.Provider> */}
        </div>
    )
}

export default Parent;
// export { UserContext };
export {ThemeContext};
 