import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

function Packages(){

const [packages,setPackages] = useState([])
const [loading,setLoading] = useState(true)

const { type, state } = useParams()

useEffect(()=>{

let url = "http://localhost:5000/api/packages"

if(type && state){
url += `?type=${type}&state=${encodeURIComponent(state)}`
}

fetch(url)
.then(res => res.json())
.then(data => {
setPackages(data)
setLoading(false)
})
.catch(err => {
console.error(err)
setLoading(false)
})

},[type,state])

if(loading){
return <p className="loading">Loading packages...</p>
}

return(

<div className="packages-page">

<div className="container">

<h1 className="page-title">Tour Packages</h1>

{packages.length === 0 && (
<p className="empty">No packages found.</p>
)}

<div className="package-grid">

{packages.map(pkg => (

<div key={pkg._id} className="package-card">

<div className="image-box">

<img
src={
pkg.image
? `http://localhost:5000/uploads/${pkg.image}`
: "https://via.placeholder.com/500x300"
}
alt={pkg.title}
/>

<span className="badge">
{pkg.category || "Tour"}
</span>

</div>

<div className="package-info">

<h3>{pkg.title}</h3>

<p className="duration">
{pkg.duration || "Duration not available"}
</p>

<p className="price">
₹{pkg.price || "Contact"}
</p>

<Link
to={`/package/${pkg._id}`}
className="view-btn"
>
View Details
</Link>

</div>

</div>

))}

</div>

</div>

</div>

)

}

export default Packages