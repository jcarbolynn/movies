import { useState } from 'react'
import MovieCard from "./components/movie_card"
// if you just export functionName you have to have function name in {}
// if you export default functionName you can export without {}
import './App.css'
import Home from "./pages/Home"

function App() {
  // components returns jsx code (which looks like html)
  // jsx can only have one parent div (ex cant return two divs on same level)
  // const [count, setCount] = useState(0)

  const movieNumber = 1;
  // conditional render, if condition met show this otherwise show the other
  // {movieNumber ===1 ? (first outcome) : (second outcome)}

  return (
    <>
      <Home />
    </>
  )
}

export default App
