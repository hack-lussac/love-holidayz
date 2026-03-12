import { NavLink } from "react-router-dom"
import { useState, useRef, useEffect } from "react"

function Header(){

const [openDomestic,setOpenDomestic] = useState(false)
const [openInternational,setOpenInternational] = useState(false)
const [mobileMenu,setMobileMenu] = useState(false)

const [domesticTours,setDomesticTours] = useState([])
const [internationalTours,setInternationalTours] = useState([])

const domesticRef = useRef()
const internationalRef = useRef()

/* Fetch destinations */

useEffect(()=>{

fetch("http://localhost:5000/api/packages?type=domestic")
.then(res=>res.json())
.then(data=>{

const states = [...new Set(data.map(pkg => pkg.state))]
setDomesticTours(states)

})

fetch("http://localhost:5000/api/packages?type=international")
.then(res=>res.json())
.then(data=>{

const states = [...new Set(data.map(pkg => pkg.state))]
setInternationalTours(states)

})

},[])


/* Close dropdown when clicking outside */

useEffect(()=>{

function handleClickOutside(event){

if(domesticRef.current && !domesticRef.current.contains(event.target)){
setOpenDomestic(false)
}

if(internationalRef.current && !internationalRef.current.contains(event.target)){
setOpenInternational(false)
}

}

document.addEventListener("mousedown",handleClickOutside)

return ()=> document.removeEventListener("mousedown",handleClickOutside)

},[])

return(

<header className="site-header">

<div className="container header-inner">

<div className="brand">
Flyways <span>Trip</span>
</div>

{/* MOBILE MENU BUTTON */}

<div
className="mobile-menu-btn"
onClick={()=>setMobileMenu(!mobileMenu)}
>
☰
</div>

<nav className={`main-nav ${mobileMenu ? "active" : ""}`}>

<NavLink to="/">Home</NavLink>

{/* DOMESTIC */}

<div className="dropdown" ref={domesticRef}>

<button
className="dropdown-title"
onClick={()=>setOpenDomestic(!openDomestic)}
>
Domestic ▼
</button>

{openDomestic && (

<div className="dropdown-menu">

{domesticTours.map((state,index)=>(

<NavLink
key={state}
to={`/packages/domestic/${encodeURIComponent(state)}`}
>
📍 {state} Tour
</NavLink>

))}

</div>

)}

</div>

{/* INTERNATIONAL */}

<div className="dropdown" ref={internationalRef}>

<button
className="dropdown-title"
onClick={()=>setOpenInternational(!openInternational)}
>
International ▼
</button>

{openInternational && (

<div className="dropdown-menu">

{internationalTours.map((country,index)=>(

<NavLink
key={country}
to={`/packages/international/${encodeURIComponent(country)}`}
>
🌍 {country} Tour
</NavLink>

))}

</div>

)}

</div>

<NavLink to="/blog">Blog</NavLink>
<NavLink to="/gallery">Gallery</NavLink>

<NavLink to="/contact" className="cta-link">
Enquiry
</NavLink>

</nav>

</div>

</header>

)

}

export default Header