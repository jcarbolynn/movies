import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// npm install react-router-dom
// adds to package.json and in node-modules
// need to wrap react components with something that gives ability to route

// browserrouter lets us change components we are rendering on screen
// based on slash route we are going to for web page