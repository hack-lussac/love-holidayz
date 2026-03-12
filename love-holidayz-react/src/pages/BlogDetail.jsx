import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from "axios"

function BlogDetail(){

const { slug } = useParams()

const [blog,setBlog] = useState(null)
const [loading,setLoading] = useState(true)

useEffect(()=>{

axios.get(`http://localhost:5000/api/blog/${slug}`)
.then(res=>{
setBlog(res.data)
setLoading(false)
})
.catch(err=>{
console.error(err)
setLoading(false)
})

},[slug])

if(loading){
return <p className="loading">Loading article...</p>
}

if(!blog){
return <h2 style={{textAlign:"center"}}>Blog not found</h2>
}

return(

<div className="blog-detail">

{/* HERO IMAGE */}

<div className="blog-hero">

<img
src={
pkg.image
? `http://localhost:5000/uploads/${pkg.image}`
: "https://via.placeholder.com/500x300"
}
alt={pkg.title}
/>

<div className="blog-hero-overlay">
<h1>{blog.title}</h1>
<p>
{new Date(blog.createdAt).toLocaleDateString()} • Travel Blog
</p>
</div>

</div>


{/* BLOG CONTENT */}

<div className="blog-container">

<div
className="blog-content"
dangerouslySetInnerHTML={{__html:blog.content}}
/>

</div>

</div>

)

}

export default BlogDetail