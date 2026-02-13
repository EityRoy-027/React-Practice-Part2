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

return(

<>

<div style={counterStyle}>
    <h3>count:{count}</h3>
    <button>Add</button>
</div>


</>


)



}