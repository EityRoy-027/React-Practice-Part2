import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Cricket from './Cricket'
import Users from './Users'
import { Suspense } from 'react'
import Friends from './Friends'

function App() {

//  const friendPromise=fetchFriends();

  const [count, setCount] = useState(0)


function handlerClick1(){
  alert("First Button is Clicked!");
}

const  handlerClick2 =() => {
 alert("Second Button is Clicked!");
}

//with parameter
const handlerAdd =(number) =>{
const newNumber=number+10;
alert(newNumber);
}

// Users.jsx
const fetchUsers=fetch('https://react.dev/reference/react-dom')
.then (res => res.json())

//Friends.jsx
 const fetchFriends = async () =>{
const res= await fetch ('https://react.dev/reference/react-dom');
return res.json;
 }


  return (
    <>
  
  <Suspense fallback={<h3>Friends are coming....</h3>}>
    <Friends friendPromise={friendPromise}>
    </Friends>
  </Suspense>

    <Suspense fallback={<h2>Loading</h2>}>
      <Users fetchUsers ={fetchUsers}></Users>
    </Suspense>

    <Cricket></Cricket>
    <Counter></Counter>
    
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


  <button onClick={() =>handlerAdd(10)}>Fourth Button</button>

    </>
  )
}

export default App
