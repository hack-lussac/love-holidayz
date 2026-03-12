import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function DomesticTours(){

const [states,setStates] = useState([])

useEffect(()=>{

fetch("http://localhost:5000/api/packages?type=domestic")
.then(res=>res.json())
.then(data=>{

const uniqueStates = [
...new Set(data.map(pkg => pkg.state))
]

setStates(uniqueStates)

})

},[])

return(

<section className="destinations">

<h2>Domestic Destinations</h2>

<div className="destination-grid">

{states.map(state => (

<Link
key={state}
to={`/packages/domestic/${state.toLowerCase()}`}
className="destination-card"
>

{state}

</Link>

))}

</div>

</section>

)

}

export default DomesticTours