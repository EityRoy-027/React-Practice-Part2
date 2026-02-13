import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


function handlerClick1(){
  alert("Already Clicked!");
}

  return (
    <>
    
  {/* event handler */}
  
  {/* first-normal method */}
  <button onClick={handlerClick1}>Click me</button>
  


  
  {/* second-notused method */}
  <button onClick={function handlerClick1(){
    alert("Already Clicked2!");
  }}>Click me2</button>

  
  
  {/* third-arrowfunction method */}


    </>
  )
}

export default App
