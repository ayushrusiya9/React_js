import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA';


//step 1: create context
const UserContext = createContext();
// step 2 :  wrap all the element inside the provider
//step 3 : pass value
//step 4: cunsumer ke ander jaake cunsume ker lo 

const Parent = () => {
    let userData = {
        name:"ayush",
        age:21,
        city:"bhopal"
    }
    const [user, setUser] =useState(userData);
  return (
    <div>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </div>
  )
}

export default Parent
export { UserContext };
 