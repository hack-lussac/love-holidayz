import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPhone } from "react-icons/fa"

function TopBar(){

return(

<div className="top-bar">

<div className="container top-inner">

<div className="support">

<span>CUSTOMER SUPPORT</span>

<span className="divider">|</span>

<FaPhone className="phone-icon"/>

<span>+91-9911585642</span>

</div>

<div className="social">

<span>FOLLOW US</span>

<div className="icons">

<FaFacebookF/>
<FaInstagram/>
<FaLinkedinIn/>
<FaYoutube/>

</div>

</div>

</div>

</div>

)

}

export default TopBar