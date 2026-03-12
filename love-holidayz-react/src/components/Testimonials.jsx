function Testimonials(){

const testimonials = [

{
text:"We booked family vacation tour and we are highly satisfied with the support and package provided.",
name:"Rahul Sharma"
},

{
text:"Very satisfied with Shimla-Manali Trip organised by the team. Everything was smooth and professional.",
name:"Anjali Mehta"
},

{
text:"Our Kerala Trip was amazing. Hotels, transport and planning were perfect.",
name:"Amit Verma"
}

]

return(

<section className="testimonial-section">

<div className="container">

<h2 className="section-title">
<span>Client</span> Testimonial
</h2>

<p className="section-desc">
Some Beautiful Feedback From Our Valuable Clients
</p>

<div className="testimonial-grid">

{testimonials.map((item,index)=>(

<div className="testimonial-card" key={index}>

<p className="testimonial-text">
"{item.text}"
</p>

<h4>{item.name}</h4>

</div>

))}

</div>

</div>

</section>

)

}

export default Testimonials