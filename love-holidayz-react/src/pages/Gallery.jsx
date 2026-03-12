import { useEffect,useState } from "react"

function Gallery(){

const [images,setImages] = useState([])
const [loading,setLoading] = useState(true)

useEffect(()=>{

fetch("http://localhost:5000/api/gallery")
.then(res => res.json())
.then(data=>{
setImages(data)
setLoading(false)
})
.catch(err=>{
console.error(err)
setLoading(false)
})

},[])

if(loading){
return <p className="loading">Loading gallery...</p>
}

return(

<section className="gallery-section">

<h1 className="gallery-title">Travel Gallery</h1>

<div className="container gallery-grid">

{images.length === 0 && (
<p>No images available</p>
)}

{images.map(img => (

<div className="gallery-card" key={img._id}>

<img
src={
pkg.image
? `http://localhost:5000/uploads/${pkg.image}`
: "https://via.placeholder.com/500x300"
}
alt={pkg.title}
/>

<div className="gallery-caption">
{img.title}
</div>

</div>

))}

</div>

</section>

)

}

export default Gallery