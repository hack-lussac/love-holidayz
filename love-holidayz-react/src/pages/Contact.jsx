import { useState } from "react"

function Contact(){

const [name,setName] = useState("")
const [phone,setPhone] = useState("")
const [message,setMessage] = useState("")
const [loading,setLoading] = useState(false)
const [success,setSuccess] = useState("")

const sendEnquiry = async(e)=>{

e.preventDefault()

if(phone.length < 10){
alert("Enter valid phone number")
return
}

try{

setLoading(true)

const res = await fetch("http://localhost:5000/api/enquiry",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
phone,
message
})

})

const data = await res.json()

setSuccess("✅ Enquiry sent successfully!")

setName("")
setPhone("")
setMessage("")

}catch(err){

alert("❌ Failed to send enquiry")

}

finally{
setLoading(false)
}

}

return(

<section className="contact-page">

<div className="contact-container">

{/* LEFT SIDE */}

<div className="contact-info">

<h2>Contact Us</h2>

<p>
Have questions about our holiday packages?
Send us a message and our travel experts will help you plan
your perfect Trip.
</p>

<div className="contact-details">

<p>📞 +91 9911585642</p>
<p>📧 booking@FlywaysTrip.com</p>
<p>📍 Janakpuri, New Delhi</p>

</div>

</div>


{/* RIGHT SIDE FORM */}

<div className="contact-card">

<h3>Send Enquiry</h3>

{success && <p className="success-msg">{success}</p>}

<form onSubmit={sendEnquiry}>

<input
type="text"
placeholder="Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<input
type="tel"
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
required
/>

<textarea
placeholder="Your Message"
value={message}
onChange={(e)=>setMessage(e.target.value)}
rows="5"
/>

<button
className="btn-primary"
disabled={loading}
>

{loading ? "Sending..." : "Send Enquiry"}

</button>

</form>

</div>

</div>

</section>

)

}

export default Contact