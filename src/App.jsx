import { useState } from 'react'
import MovieCard from "./components/movie_card"
// if you just export functionName you have to have function name in {}
// if you export default functionName you can export without {}
import './App.css'

function App() {
  // components returns jsx code (which looks like html)
  // jsx can only have one parent div (ex cant return two divs on same level)
  // const [count, setCount] = useState(0)

  let things = [];
  for (let i = 1; i <= 10; i++){
    things.push(i);
  }

  const movieNumber = 1;
  // conditional render, if condition met show this otherwise show the other
  // {movieNumber ===1 ? (first outcome) : (second outcome)}

  return (
    <>
      {movieNumber === 1 ? (
      <MovieCard movie={{title: "MOVIE NAME", release_date: "2025"}}/>
      ) : (
      <MovieCard movie={{title: "SECOND NAME", release_date: "2025"}}/> 
      ) }

      {movieNumber === 1 && 
      <MovieCard movie={{title: "MOVIE NAME", release_date: "2025"}}/> }
      
    </>
  )
}

function Text({text}) {
  return (
    <div>{text}</div>
  )
}

export default App
