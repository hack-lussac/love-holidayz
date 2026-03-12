import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

function EditPackage(){

const {id} = useParams()

const [title,setTitle] = useState("")
const [duration,setDuration] = useState("")
const [price,setPrice] = useState("")
const [image,setImage] = useState("")

useEffect(()=>{

axios.get(`http://localhost:5000/api/packages/${id}`)
.then(res => {

setTitle(res.data.title)
setDuration(res.data.duration)
setPrice(res.data.price)
setImage(res.data.image)

})

},[id])

const update = async(e)=>{

e.preventDefault()

await axios.put(`http://localhost:5000/api/packages/${id}`,{

title,
duration,
price,
image

})

alert("Package updated")

}

return(

<div className="admin-layout">

<Sidebar/>

<div className="admin-content">

<Navbar/>

<h2>Edit Package</h2>

<form onSubmit={update} className="admin-form">

<input
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<input
value={duration}
onChange={(e)=>setDuration(e.target.value)}
/>

<input
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<input
value={image}
onChange={(e)=>setImage(e.target.value)}
/>

<button className="btn-primary">
Update Package
</button>

</form>

</div>

</div>

)

}

export default EditPackage