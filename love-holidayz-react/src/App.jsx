import { Routes, Route } from "react-router-dom"

import TopBar from "./components/TopBar"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Packages from "./pages/Packages"
import PackageDetails from "./pages/PackageDetails"

import "./styles/style.css"

function App(){

return(

<>

<TopBar/>
<Header/>

<Routes>

<Route path="/" element={<Home/>} />

<Route path="/packages" element={<Packages/>} />

<Route path="/packages/:type/:state" element={<Packages/>} />

<Route path="/package/:id" element={<PackageDetails/>} />

<Route path="/blog" element={<Blog/>} />

<Route path="/gallery" element={<Gallery/>} />

<Route path="/contact" element={<Contact/>} />

</Routes>

<Footer/>

</>

)

}

export default App