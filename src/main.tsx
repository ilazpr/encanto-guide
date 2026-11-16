import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

import { VARIANT } from './variant'
document.documentElement.dataset.v = VARIANT
createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
