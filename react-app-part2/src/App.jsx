import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


function handlerClick1(){
  alert("First Button is Clicked!");
}

const  handlerClick2 =() => {
 alert("Second Button is Clicked!");
}

  return (
    <>
    
  {/* event handler-without parameter */}
  
  {/* first-normal method */}
  <button onClick={handlerClick1}>First Button</button>
  


  
  {/* second-notused method */}
  <button onClick={function handlerClick1(){
   alert("Mid Button is Clicked!");
  }}>Mid Button</button>

  
  
  {/* third-arrowfunction method */}
  
  <button onClick={handlerClick2}>Second Button</button>
  
  {/* directly using arrowfunction */}
  
  <button onClick={() => alert("Third Button is Clicked!")}>Third Button</button>

    </>
  )
}

export default App
