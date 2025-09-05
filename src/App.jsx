import React from 'react'
import Header from './Header'
import Footer from './Footer'

function App() {
  let yellow = {
    color:"yellow",
  }

  return (
    <>
    <Header/>
      <h1 style={{color:"red",}}>helllo</h1> 
      <h2 style={yellow}>Hello WORLD!</h2>
      <Footer/>
    </>
  )
}

export default App
