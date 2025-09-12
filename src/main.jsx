import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Titulo  from './titulo.jsx'
import Props from './Usuario_email_antigo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Titulo />
    <Props nomeAntigo ='Jerson' emailAntigo= 'jersonzin@gmail.com'></Props>
    <App />
  </StrictMode>,
)
