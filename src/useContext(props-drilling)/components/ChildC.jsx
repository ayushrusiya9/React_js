import React, { useContext } from 'react'
// import { UserContext } from '../Parent'
import { ThemeContext } from '../Parent'


const ChildC = () => {
  // const user = useContext(UserContext)
  const {theme,setTheme} = useContext(ThemeContext)

  function toggleTheme(){
    if(theme === "light")
      setTheme("dark")
    else
      setTheme("light")
  }

  return (
    <>
      <button
      onClick={toggleTheme}
      >Click To change</button>
    </>
  )
}

export default ChildC;
