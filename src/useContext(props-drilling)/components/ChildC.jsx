import React, { useContext } from 'react'
import { UserContext } from '../Parent'
const ChildC = () => {
  const user = useContext(UserContext)

  return (
    <div>
      <h1>hello jii...</h1>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <h1>{user.city}</h1>
    </div>
  )
}

export default ChildC
