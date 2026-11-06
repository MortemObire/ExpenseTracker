import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Expense from './Expense.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Expense />
  </StrictMode>,
)
