export default function Friend({friend}){

const {name,phone,username,email,address} = friend;

return(

<>

<div style={{border:'5px solid olive',borderRadius:'15px',height:'100px'}}>
    
    <h5>Name: {name}</h5>
    <p>Phone:{phone}</p>
    <p>Username:{username}</p>
    <p>Email:{email} </p>
    <p>Address:{address}</p>
    
</div>

</>

)


 }