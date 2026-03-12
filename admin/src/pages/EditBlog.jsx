import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

function EditBlog(){

const {id} = useParams()

const [title,setTitle] = useState("")
const [description,setDescription] = useState("")
const [image,setImage] = useState("")

useEffect(()=>{

axios.get(`http://localhost:5000/api/blog/${id}`)
.then(res=>{

setTitle(res.data.title)
setDescription(res.data.description)
setImage(res.data.image)

})

},[id])

const update = async(e)=>{

e.preventDefault()

await axios.put(
`http://localhost:5000/api/blog/${id}`,
{title,description,image}
)

alert("Blog updated")

}

return(

<div className="admin-layout">

<Sidebar/>

<div className="admin-content">

<Navbar/>

<h2>Edit Blog</h2>

<form className="admin-form" onSubmit={update}>

<input
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<input
value={image}
onChange={(e)=>setImage(e.target.value)}
/>

<textarea
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<button className="btn-primary">
Update Blog
</button>

</form>

</div>

</div>

)

}

export default EditBlog