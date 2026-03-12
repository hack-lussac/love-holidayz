import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function InternationalPackages(){

const [packages,setPackages] = useState([])

useEffect(()=>{

fetch("http://localhost:5000/api/packages?type=international")
.then(async res => {

if(!res.ok){
throw new Error("API Error")
}

return res.json()

})
.then(data => setPackages(data))
.catch(err => console.error("InternationalPackages Error:",err))

},[])

return(

<section className="section white">

<div className="container">

<h2 className="section-title">
International Holiday Packages
</h2>

<div className="packages-grid">

{packages.slice(0,6).map(pkg => (

<div className="package-card" key={pkg._id}>

<div className="package-image">

<img
src={
pkg.image
? `http://localhost:5000/uploads/${pkg.image}`
: "https://via.placeholder.com/500x300"
}
alt={pkg.title}
/>

</div>

<div className="package-content">

<h3>{pkg.title}</h3>

<p className="duration">{pkg.duration}</p>

<div className="package-footer">

<span className="price">₹{pkg.price}</span>

<Link
to={`/package/${pkg._id}`}
className="btn-view"
>
View
</Link>

</div>

</div>

</div>

))}

</div>

</div>

</section>

)

}

export default InternationalPackages