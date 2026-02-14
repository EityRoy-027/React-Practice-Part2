import { useState } from "react";

//only fetch:-

export default function Dog(){

const fetchDog = fetch('https://dog.ceo/dog-api/')
.then (res => res.json())
.then (data => {
  getDogImg( data.message);
})


return(

<>

<button onClick={DogImg}>Get Cuty</button>
<img src="{dogImg}" alt="" style={{width:'350px', height:'350px'}} />

</>

)

}