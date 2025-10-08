import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App'
// import App from './use_css/Css'
// import App from './props/Chlid'
// import App from './tailwind_css/Tailwind'
import App from './routerss/Routing'
// import App from './State/State'
// import App from './form/Form'
// import App from './map/Map'
// import App from './rendering/Randering'
import MyContext from './props_drilling/MyContext'
// import App from './props_drilling/Context'
// import App from './useEffect/UseEffect'

import { BrowserRouter } from 'react-router-dom'

let MyData = {
  name:"ayush",
  age:21,
  city:"Bhopal",
  state:"M.P"
}

let Hobby = ["coding","cricket","travelling"]

let theme ={
  light:{
    "color":"black",
    "backgroundColor":"white",
    "width":"100px",
    "height":"100px"
  },
  dark:{
    "color":"white",
    "backgroundColor":"black",
    "width":"100px",
    "height":"100px"
  }
}

let numbers = [1,2]

createRoot(document.getElementById('root')).render(
  <MyContext.Provider value={{theme,Hobby,MyData,numbers}}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </MyContext.Provider>
)
