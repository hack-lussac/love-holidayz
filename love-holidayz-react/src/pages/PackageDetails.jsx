import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function PackageDetails(){

const { id } = useParams()

const [pkg,setPkg] = useState(null)
const [loading,setLoading] = useState(true)

useEffect(()=>{

fetch(`http://localhost:5000/api/packages/${id}`)
.then(res => res.json())
.then(data => {
setPkg(data)
setLoading(false)
})
.catch(err=>{
console.error(err)
setLoading(false)
})

},[id])

if(loading){
return <p className="loading">Loading package...</p>
}

if(!pkg){
return <h2 style={{textAlign:"center"}}>Package not found</h2>
}

/* SAFE IMAGE */

const image =
pkg.image
? `http://localhost:5000/uploads/${pkg.image}`
: "https://via.placeholder.com/1200x600"

return(

<>

{/* HERO SECTION */}

<section className="package-hero">

<img
src={
pkg.image
? `http://localhost:5000/uploads/${pkg.image}`
: "https://via.placeholder.com/500x300"
}
alt={pkg.title}
/>

<div className="hero-overlay">

<h1>{pkg.title}</h1>

<p className="hero-duration">
{pkg.duration || "Tour Duration"}
</p>

<div className="hero-price">
₹{pkg.price || "Contact for price"}
</div>

<button className="book-btn">
Enquire Now
</button>

</div>

</section>


{/* PACKAGE DETAILS */}

<section className="package-details">

<div className="container">

<div className="details-block">

<h2>Tour Overview</h2>

<p>
{pkg.overview || "Tour overview not available."}
</p>

</div>


<div className="details-block">

<h2>Day Wise Itinerary</h2>

<p style={{whiteSpace:"pre-line"}}>
{pkg.itinerary || "Itinerary not available."}
</p>

</div>


<div className="details-block">

<h2>Inclusions</h2>

<p style={{whiteSpace:"pre-line"}}>
{pkg.inclusions || "Inclusions not available."}
</p>

</div>

</div>

</section>

</>

)

}

export default PackageDetails