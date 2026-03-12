import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function InternationalTours(){

const [states,setStates] = useState([])

useEffect(()=>{

fetch("http://localhost:5000/api/packages?type=international")
.then(res => res.json())
.then(data => {

const uniqueStates = [
...new Set(data.map(pkg => pkg.state))
]

setStates(uniqueStates)

})
.catch(err => console.error(err))

},[])

return(

<section className="destinations">

<h2>International Destinations</h2>

<div className="destination-grid">

{states.map(state => (

<Link
key={state}
to={`/packages/international/${state.toLowerCase()}`}
className="destination-card"
>

{state}

</Link>

))}

</div>

</section>

)

}

export default InternationalTours