import { use } from "react"
import Post from './post'

export default function Posts({postPromise}){

const posts = use(postPromise);
console.log(posts);
    
return(

<>

<div style={{border:'5px solid pink',borderRadius:'15px',height:'auto'}}>

<h3>All Posts are here:{posts.length}</h3>

{
    posts.map( post => <Posts key={post.id} post={post}></Posts>)
}

</div>

</>

)

}