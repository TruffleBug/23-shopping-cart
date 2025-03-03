import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import { FavFood } from './FavFood.jsx'
import { HtmlToJSX } from './htmlToJSXpractice.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <FavFood />
    <HtmlToJSX />
  </StrictMode>,
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// createRoot(document.getElementById('root')).render(
//   'Hello'
// )
