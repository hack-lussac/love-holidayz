import { useState } from "react"
import axios from "axios"

function AddPackage(){

const [form,setForm] = useState({

title:"",
duration:"",
price:"",
category:"",
type:"",
state:"",
overview:"",
itinerary:"",
inclusions:"",
popular:false

})

const [images,setImages] = useState([])

const handleChange = (e)=>{

const {name,value,type,checked} = e.target

setForm({
...form,
[name]: type==="checkbox" ? checked : value
})

}

const handleSubmit = async(e)=>{

e.preventDefault()

try{

const data = new FormData()

for(let key in form){
data.append(key,form[key])
}

for(let i=0;i<images.length;i++){
data.append("images",images[i])
}

await axios.post(
"http://localhost:5000/api/packages",
data
)

alert("✅ Package Added Successfully")

setForm({
title:"",
duration:"",
price:"",
category:"",
type:"",
state:"",
overview:"",
itinerary:"",
inclusions:"",
popular:false
})

setImages([])

}catch(err){

console.log(err)
alert("❌ Failed to add package")

}

}

return(

<div className="admin-form">

<h2>Add Package</h2>

<form onSubmit={handleSubmit}>

<input
name="title"
placeholder="Package Title"
value={form.title}
onChange={handleChange}
required
/>

<input
name="duration"
placeholder="Duration"
value={form.duration}
onChange={handleChange}
required
/>

<input
type="number"
name="price"
placeholder="Price"
value={form.price}
onChange={handleChange}
required
/>

<select
name="category"
value={form.category}
onChange={handleChange}
required
>

<option value="">Select Category</option>
<option>Honeymoon</option>
<option>Family</option>
<option>Adventure</option>

</select>

<select
name="type"
value={form.type}
onChange={handleChange}
required
>

<option value="">Select Type</option>
<option>Domestic</option>
<option>International</option>

</select>

<input
name="state"
placeholder="Destination / State"
value={form.state}
onChange={handleChange}
required
/>

<textarea
name="overview"
placeholder="Tour Overview"
value={form.overview}
onChange={handleChange}
/>

<textarea
name="itinerary"
placeholder="Day Wise Itinerary"
value={form.itinerary}
onChange={handleChange}
/>

<textarea
name="inclusions"
placeholder="Inclusions"
value={form.inclusions}
onChange={handleChange}
/>

<label>Upload Images</label>

<input
type="file"
multiple
accept="image/*"
onChange={(e)=>setImages(e.target.files)}
/>

<label>

<input
type="checkbox"
name="popular"
checked={form.popular}
onChange={handleChange}
/>

Popular Package

</label>

<button type="submit">
Add Package
</button>

</form>

</div>

)

}

export default AddPackage