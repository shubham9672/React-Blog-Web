import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

 function AddPost() {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const navigate = useNavigate()
    const auth = sessionStorage.getItem("user")

    const addPost = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/posts/",{
        title : title,
        desc : desc,
        author : JSON.parse(auth).username
    }).then((resp)=>{
        alert("Blog Added Successfully")
        navigate("/")

    })
    }

  return (
     <div className="container" style={{  maxWidth:'50%' ,margin: 'auto', marginTop:'100px' }}>
        
    <form>
                <h3>Add Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" placeholder="Enter Title" onChange={(e)=>settitle(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea type="text" style={{ height:"250px" }} className="form-control" placeholder="Enter description" onChange={(e)=>setdesc(e.target.value)} required/>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary btn-block" onClick={(e)=>addPost(e)}>Submit</button>
               
            </form>
            </div>
  )
}
export default AddPost;