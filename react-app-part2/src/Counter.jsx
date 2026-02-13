import { useState } from "react";

export default function Counter(){


// Using State    
const[count, setCount] =useState(0);

// style
const counterStyle={
border:"5px solid orange",
borderRadius:"5px",
}

//Eventhandleing
const handleClick = () => {
const newCount= count+1;
setCount(newCount);
}

return(

<>

<div style={counterStyle}>
    <h3>count:{count}</h3>
    <button onClick={handleClick}>Add</button>
</div>


</>


)



}