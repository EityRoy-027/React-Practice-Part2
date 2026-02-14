export default function (fetchUsers){

const fetchUsers=fetch('https://react.dev/reference/react-dom')
.then (res => res.json())

const users = use(fetchUsers);
console.log(users);


return(

<>

<div className="card">
<h3>User:</h3>
</div>

</>

)

}