import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import WhatsApp from "../components/WhatsApp"
import PopularTours from "../components/PopularTours"
import InternationalPackages from "../components/InternationalPackages"
import WhyChooseUs from "../components/WhyChooseUs"
import Testimonials from "../components/Testimonials"

function Home(){

const [packages,setPackages] = useState([])
const [hero,setHero] = useState([])
const [current,setCurrent] = useState(0)


// FETCH POPULAR PACKAGES
useEffect(()=>{

fetch("http://localhost:5000/api/packages?popular=true")

.then(async res => {

if(!res.ok){
throw new Error("API Error")
}

return res.json()

})

.then(data=>{
if(Array.isArray(data)){
setPackages(data)
}else{
setPackages([])
}
})

.catch(err=>console.error("Home Packages Error:",err))

},[])


// FETCH HERO SLIDES
useEffect(()=>{

fetch("http://localhost:5000/api/hero")

.then(async res => {

if(!res.ok){
throw new Error("Hero API Error")
}

return res.json()

})

.then(data=>{
if(Array.isArray(data)){
setHero(data)
}else{
setHero([])
}
})

.catch(err=>console.error("Hero Error:",err))

},[])


// HERO AUTO SLIDER
useEffect(()=>{

if(hero.length === 0) return

const interval = setInterval(()=>{

setCurrent(prev => (prev + 1) % hero.length)

},3000)

return () => clearInterval(interval)

},[hero.length])


// SAFE HERO IMAGE
const heroImage =
hero.length > 0 && hero[current] && hero[current].image
? `http://localhost:5000/uploads/${hero[current].image}`
: "/images/banner.jpg"



return(

<>

{/* HERO SECTION */}

<section
className="hero"
style={{
backgroundImage:`url(${heroImage})`
}}
>

<div className="hero-overlay">

<div className="hero-content">

<h1>
Crafting Holidays <span>You’ll Fall in Love With</span>
</h1>

<p>
Honeymoon • Family • Luxury • International
</p>

<div className="hero-buttons">

<Link to="/packages" className="btn-primary">
Explore Packages
</Link>

<Link to="/contact" className="btn-outline">
Plan Your Trip
</Link>

</div>

</div>

</div>

</section>


{/* POPULAR TOURS */}

<PopularTours />


{/* INTERNATIONAL PACKAGES */}

<InternationalPackages />


{/* POPULAR HOLIDAY PACKAGES */}

<section className="section white">

<div className="container">

<h2 className="section-title">
Popular Holiday Packages
</h2>

<div className="packages-grid">

{packages.slice(0,3).map(pkg => (

<div className="package-card" key={pkg._id}>

<div className="package-image">

<img
src={
pkg.image
? `http://localhost:5000/uploads/${pkg.image}`
: "https://via.placeholder.com/500x300"
}
alt={pkg.title || "Tour Package"}
/>

</div>

<div className="package-content">

<h3>{pkg.title}</h3>

<p className="duration">
{pkg.duration || "Duration not available"}
</p>

<div className="package-footer">

<span className="price">
₹{pkg.price || "Contact"}
</span>

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


{/* OTHER SECTIONS */}

<WhyChooseUs />
<Testimonials />
<WhatsApp/>

</>

)

}

export default Home
