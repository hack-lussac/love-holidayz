import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Blog(){

const [blogs,setBlogs] = useState([])
const [loading,setLoading] = useState(true)

useEffect(()=>{

fetch("http://localhost:5000/api/blog")
.then(res => res.json())
.then(data=>{
setBlogs(data)
setLoading(false)
})
.catch(err=>{
console.error(err)
setLoading(false)
})

},[])

if(loading){
return <p className="loading">Loading blogs...</p>
}

return(

<div className="blog-page">

<h1 className="blog-title">Travel Blog</h1>

<div className="blog-grid">

{blogs.length === 0 && (
<p className="no-blog">No blog posts available.</p>
)}

{blogs.map(blog => (

<div key={blog._id} className="blog-card">

<img
src={
pkg.image
? `http://localhost:5000/uploads/${pkg.image}`
: "https://via.placeholder.com/500x300"
}
alt={pkg.title}
/>

<div className="blog-content">

<h2>{blog.title}</h2>

<p className="blog-date">
{new Date(blog.createdAt).toLocaleDateString()}
</p>

<Link
to={`/blog/${blog.slug}`}
className="read-more"
>
Read Article →
</Link>

</div>

</div>

))}

</div>

</div>

)

}

export default Blog
