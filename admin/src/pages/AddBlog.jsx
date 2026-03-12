import { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

function AddBlog(){

const [content,setContent] = useState("")

const modules = {
toolbar: [
[{ header: [1,2,3,false] }],
["bold","italic","underline"],
[{ list:"ordered" },{ list:"bullet" }],
["link","image"],
["clean"]
]
}

const formats = [
"header",
"bold",
"italic",
"underline",
"list",
"bullet",
"link",
"image"
]

return(

<div>

<h2>Add Blog</h2>

<ReactQuill
theme="snow"
value={content}
onChange={setContent}
modules={modules}
formats={formats}
/>

</div>

)

}

export default AddBlog