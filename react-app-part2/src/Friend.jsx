export default function Friend({friend}){
console.log(friend);
const {name,phone,username,email} = friend;

return(

<>

<div style={{border:'5px solid olive',borderRadius:'15px',height:'auto'}}>
    
    <h3>Name: {name}</h3>
    <p>Phone:{phone}</p>
    <p>Username:{username}</p>
    <p>Email:{email} </p>
    
    
</div>

</>

)


 }