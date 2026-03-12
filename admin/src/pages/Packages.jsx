import { useEffect, useState } from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

function Packages(){

const [packages,setPackages] = useState([])

const fetchPackages = async () => {

try{

const res = await axios.get("http://localhost:5000/api/packages")

setPackages(res.data)

}catch(err){

console.error("Error fetching packages:",err)

}

}

useEffect(()=>{
fetchPackages()
},[])

const deletePackage = async(id)=>{

if(!window.confirm("Delete this package?")) return

try{

await axios.delete(`http://localhost:5000/api/packages/${id}`)

fetchPackages()

}catch(err){

console.error("Delete failed:",err)

}

}

return(

<div className="admin-layout">

<Sidebar/>

<div className="admin-content">

<Navbar/>

<div className="page-header">

<h2>Packages</h2>

<Link to="/add-package" className="btn-primary">
Add Package
</Link>

</div>

<table className="admin-table">

<thead>

<tr>
<th>Title</th>
<th>Duration</th>
<th>Price</th>
<th>Actions</th>
</tr>

</thead>

<tbody>

{packages.length === 0 ? (

<tr>
<td colSpan="4">No packages found</td>
</tr>

) : (

Array.isArray(packages) && packages.map(pkg => (

<tr key={pkg._id}>

<td>{pkg.title}</td>
<td>{pkg.duration}</td>
<td>₹{pkg.price}</td>

<td>

<Link
to={`/edit-package/${pkg._id}`}
className="btn-edit"
>
Edit
</Link>

<button
onClick={()=>deletePackage(pkg._id)}
className="btn-delete"
>
Delete
</button>

</td>

</tr>

))

)}

</tbody>

</table>

</div>

</div>

)

}

export default Packages