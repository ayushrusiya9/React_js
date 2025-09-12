import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App'
// import App from './use_css/Css'
// import App from './props/Chlid'
// import App from './tailwind_css/Tailwind'
import App from './routerss/Routing'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>,
)
 