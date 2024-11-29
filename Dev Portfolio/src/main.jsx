import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BrowserRoute from './config/routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRoute />
  </StrictMode>,
)
