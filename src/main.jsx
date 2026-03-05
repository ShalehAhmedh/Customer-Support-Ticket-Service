import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTicketAlt, faCheck, faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faTicketAlt, faCheck, faUser);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
