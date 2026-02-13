import { useState } from "react";

export default function Cricket(){

const[score,setScore]=useState(0);
const[sixes,setSixes]= useState(0);

const handleSingle =() =>{
const updatedScore=score+1;
setScore(updatedScore);
}

const handleSix = () =>{
    const updatedScore=score+6;
    setScore(updatedScore);
    const updatedSixes=sixes+1;
    setSixes(updatedSixes);
}

const handleFour = () =>{
    const updatedScore= score+4;
    setScore(updatedScore);
}
const paracolor={
    color:"red",
}

return(
<>

<div>
    {
        score>=50 && <p style={paracolor}>Congratulations! Half Century!</p>
    }
    <p><small>Six: {sixes}</small></p>
    <h4>Country: Bangladesh</h4>
    <h1>Score:{score}</h1>
    
    <button onClick={handleSingle}>Single</button>
    <button onClick={handleFour}>Four</button>
    <button onClick={handleSix}>Six</button>
</div>



</>

)

}