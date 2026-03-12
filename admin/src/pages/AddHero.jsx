import { useState } from "react"
import axios from "axios"

function AddHero(){

const [title,setTitle] = useState("")
const [subtitle,setSubtitle] = useState("")
const [image,setImage] = useState(null)

const submitHero = async(e)=>{

e.preventDefault()

const data = new FormData()

data.append("title",title)
data.append("subtitle",subtitle)
data.append("image",image)

await axios.post(
"http://localhost:5000/api/hero",
data
)

alert("Hero slide added")

}

return(

<div>

<h2>Add Hero Slide</h2>

<form onSubmit={submitHero}>

<input
placeholder="Title"
onChange={(e)=>setTitle(e.target.value)}
/>

<input
placeholder="Subtitle"
onChange={(e)=>setSubtitle(e.target.value)}
/>

<input
type="file"
onChange={(e)=>setImage(e.target.files[0])}
/>

<button type="submit">
Upload Slide
</button>

</form>

</div>

)

}

export default AddHero