import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './styles/theme.css'
import './styles/globals.css'

// basename matches Vite's `base` so the router treats /terminus-rift-site/
// as the application root.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/terminus-rift-site">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
