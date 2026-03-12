import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

function HeroSlider(){

const [slides,setSlides] = useState([])

useEffect(()=>{

fetch("http://localhost:5000/api/hero")
.then(res => res.json())
.then(data => {
if(Array.isArray(data)){
setSlides(data)
}else{
setSlides([])
}
})
.catch(err => console.error("Hero API error:",err))

},[])

if(!slides || slides.length === 0){
return <div className="loading">Loading...</div>
}

return(

<section className="hero-slider">

<Swiper
modules={[Autoplay, Pagination]}
autoplay={{ delay:4000, disableOnInteraction:false }}
loop={true}
pagination={{ clickable:true }}
>

{slides.map(slide => (

<SwiperSlide key={slide._id}>

<div
className="hero-slide"
style={{
backgroundImage:`url(http://localhost:5000/uploads/${slide.image || ""})`
}}
>

<div className="hero-overlay">

<div className="hero-content">

<h1>{slide.title}</h1>
<p>{slide.subtitle}</p>

</div>

</div>

</div>

</SwiperSlide>

))}

</Swiper>

</section>

)

}

export default HeroSlider
