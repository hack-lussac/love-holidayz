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

/* PACKAGES */

useEffect(()=>{

fetch("http://localhost:5000/api/packages?popular=true")
.then(res=>res.json())
.then(data=>setPackages(data))
.catch(err=>console.error(err))

},[])

/* HERO IMAGES */

useEffect(()=>{

fetch("http://localhost:5000/api/hero")
.then(res=>res.json())
.then(data=>setHero(data))
.catch(err=>console.error(err))

},[])

/* AUTO SLIDER */

useEffect(()=>{

if(hero.length < 2) return

const interval = setInterval(()=>{

setCurrent(prev => {
  if(hero.length === 0) return 0
  return (prev + 1) % hero.length
})

},4000)

return () => clearInterval(interval)

},[hero.length])

return(

<>

{/* HERO */}

<section
className="hero"
style={{
backgroundImage:`url(${
hero.length
? `http://localhost:5000/uploads/${hero[current].image}`
: "/images/banner.jpg"
})`
}}
>

<div className="hero-overlay">

<div className="hero-content">

<h1>
Crafting Holidays <span>You’ll Fall in Flyways With</span>
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

<PopularTours />

<InternationalPackages />

{/* POPULAR PACKAGES */}

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
alt={pkg.title}
/>

</div>

<div className="package-content">

<h3>{pkg.title}</h3>

<p className="duration">
{pkg.duration}
</p>

<div className="package-footer">

<span className="price">
₹{pkg.price}
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

<WhyChooseUs />

<Testimonials />

<WhatsApp/>

</>

)

}

export default Home