import { useState } from "react";

export default function Counter(){


// Using State    
const[count, setCount] =useState(0);

// style
const counterStyle={
border:"2px solid pink",
borderRadius:"5px",
}

//Eventhandleing
const handleClick = () => {

}

return(

<>

<div style={counterStyle}>
    <h3>count:{count}</h3>
    <button onClick={handleClick(5)}>Add</button>
</div>


</>


)



}