import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import './styles/reference.css'
import './styles/mobile.css'
import './styles/motion.css'
import App from './App.tsx'

const root = document.getElementById('root')!
const app = <StrictMode><App /></StrictMode>

if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
