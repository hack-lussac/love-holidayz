import { Link } from "react-router-dom"

function Sidebar(){

return(

<div className="sidebar">

<h2>FlywaysTrip</h2>

<ul>

<li>
<Link to="/">Dashboard</Link>
</li>

<li>
<Link to="/add-hero">Hero Slider</Link>
</li>

<li>
<Link to="/add-package">Packages</Link>
</li>

<li>
<Link to="/blogs">Blogs</Link>
</li>

<li>
<Link to="/upload">Upload</Link>
</li>

</ul>

</div>

)

}

export default Sidebar