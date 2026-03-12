import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"

import AddHero from "./pages/AddHero"
import Dashboard from "./pages/Dashboard"
import Blogs from "./pages/Blogs"
import AddBlog from "./pages/AddBlog"
import EditBlog from "./pages/EditBlog"

import AddPackage from "./pages/AddPackage"
import EditPackage from "./pages/EditPackage"
import Packages from "./pages/Packages"

import Enquiries from "./pages/Enquiries"

import { Routes, Route } from "react-router-dom"

import "./styles/admin.css"

function App(){

return(

<div className="admin-container">

<Sidebar />

<div className="main-content">

<Navbar />

<Routes>

<Route path="/" element={<Dashboard />} />
<Route path="/add-hero" element={<AddHero />} />

<Route path="/blogs" element={<Blogs />} />
<Route path="/add-blog" element={<AddBlog />} />
<Route path="/edit-blog/:id" element={<EditBlog />} />

<Route path="/packages" element={<Packages />} />
<Route path="/add-package" element={<AddPackage />} />
<Route path="/edit-package/:id" element={<EditPackage />} />

<Route path="/enquiries" element={<Enquiries />} />

</Routes>

</div>

</div>

)

}

export default App