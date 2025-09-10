import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App'
// import App from './use_css/Css'
// import App from './props/Chlid'
import App from './tailwind_css/Tailwind'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
 