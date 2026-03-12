import {useState} from "react"

function Blogs(){

const [title,setTitle] = useState("")
const [content,setContent] = useState("")

const submit = async()=>{

await fetch("http://localhost:5000/api/blog",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
title,
content
})

})

alert("Blog created")

}

return(

<div>

<h2>Create Blog</h2>

<input
placeholder="Title"
onChange={e=>setTitle(e.target.value)}
/>

<textarea
placeholder="Content"
onChange={e=>setContent(e.target.value)}
/>

<button onClick={submit}>
Publish
</button>

</div>

)

}

export default Blogs