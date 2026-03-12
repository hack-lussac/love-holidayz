import { useDropzone } from "react-dropzone"
import axios from "axios"

function ImageUpload({setImage}){

const onDrop = async(files)=>{

const formData = new FormData()

for(let i = 0; i < files.length; i++){
formData.append("images", files[i])
}

const res = await axios.post(
"http://localhost:5000/api/upload",
formData
)

setImage(res.data.image)

}

const {getRootProps,getInputProps} = useDropzone({onDrop})

return(

<div {...getRootProps()} className="upload-box">

<input {...getInputProps()} />

<p>Drag & Drop Image Here</p>

</div>

)

}

export default ImageUpload