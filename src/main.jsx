import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App'
// import App from './use_css/Css'
// import App from './props/Chlid'
// import App from './tailwind_css/Tailwind'
// import App from './routerss/Routing'
// import App from './State/State'
// import App from './form/Form'
// import App from './map/Map'
// import App from './rendering/Randering'
import MyContext from './props_drilling/MyContext'
import App from './props_drilling/Context'

import { BrowserRouter } from 'react-router-dom'

let MyData = {
  name:"ayush",
  age:21,
  city:"Bhopal",
  state:"M.P"
}

createRoot(document.getElementById('root')).render(
  <MyContext.Provider value={MyData}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </MyContext.Provider>
)
