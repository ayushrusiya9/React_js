import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// import App from './use_css/Css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
