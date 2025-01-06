import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // components returns jsx code (which looks like html)
  // jsx can only have one parent div (ex cant return two divs on same level)
  // const [count, setCount] = useState(0)

  let things = [];
  for (let i = 1; i <= 10; i++){
    things.push(i);
  }

  return (
    <>
      {things.map(oneThing => {
        return (
          <Text text={`${oneThing}: HI`}/> 
        )
      })
      }
    </>
  )
}

function Text({text}) {
  return (
    <div>{text}</div>
  )
}

export default App
