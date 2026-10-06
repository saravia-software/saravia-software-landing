import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import './styles/reference.css'
import './styles/mobile.css'
import './styles/motion.css'
import './styles/legal.css'
import App from './App.tsx'

const root = document.getElementById('root')!
const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
const app = <StrictMode><App pathname={pathname} /><Analytics /></StrictMode>

if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
