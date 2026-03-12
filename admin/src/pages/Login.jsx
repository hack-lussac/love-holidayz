import {useState} from "react"

function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const login = async(e)=>{

e.preventDefault()

const res = await fetch("http://localhost:5000/api/admin/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({email,password})

})

const data = await res.json()

localStorage.setItem("token",data.token)

window.location="/dashboard"

}

return(

<form onSubmit={login}>

<input
placeholder="Email"
onChange={e=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={e=>setPassword(e.target.value)}
/>

<button>Login</button>

</form>

)

}

export default Login