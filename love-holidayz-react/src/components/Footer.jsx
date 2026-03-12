import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Footer(){

const [footer,setFooter] = useState(null)

useEffect(()=>{

fetch("http://localhost:5000/api/footer")
.then(res=>res.json())
.then(data=>setFooter(data))

},[])

if(!footer) return null

return(

<footer className="footer">

<div className="container footer-grid">

{/* COMPANY */}

<div className="footer-col">

<h3>{footer.company.name}</h3>

<p>{footer.company.description}</p>

</div>


{/* QUICK LINKS */}

<div className="footer-col">

<h4>Quick Links</h4>

{footer.quickLinks.map(link => (

<a key={link.name} href={link.url}>
  {link.name}
</a>

))}

</div>


{/* DESTINATIONS */}

<div className="footer-col">

<h4>Destinations</h4>

{footer.destinations.map(dest => (

<p key={dest}>{dest}</p>

))}

</div>


{/* CONTACT */}

<div className="footer-col">

<h4>Contact</h4>

<p>{footer.company.phone}</p>
<p>{footer.company.email}</p>
<p>{footer.company.address}</p>

</div>

</div>

</footer>

)

}

export default Footer