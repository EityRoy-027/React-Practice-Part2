import { useState } from "react";

export default function Cricket(){

const[score,setScore]=useState(0);

const handleSingle =() =>{
const updatedScore=score+1;
setScore(updatedScore);
}



return(
<>

<div>
    <h4>Country: Bangladesh</h4>
    <h1>Score:{score}</h1>
    <button onClick={handleSingle}>Single</button>
    <button>Four</button>
    <button>Six</button>
</div>



</>

)

}