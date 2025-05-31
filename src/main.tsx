import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './components/Navbar.css'
import './components/Home.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
