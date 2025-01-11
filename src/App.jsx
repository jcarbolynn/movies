import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import { MovieProvider } from './contexts/MovieContext'

import './css/App.css'
import Home from "./pages/Home"
import Favorite from "./pages/Favorites"
// if you just export functionName you have to have function name in {}
// if you export default functionName you can export without {}
import NavBar from "./components/navbar"

function App() {
  // components returns jsx code (which looks like html)
  // jsx can only have one parent div (ex cant return two divs on same level)
  // const [count, setCount] = useState(0)

  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={< Favorite />} />
        </Routes>
      </main>
    </MovieProvider>

  )
}

export default App
