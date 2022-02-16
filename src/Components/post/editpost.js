import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
function EditPost(){
   const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const navigate = useNavigate()
    const auth = sessionStorage.getItem("user")
    const id = useParams().id
    const userName = JSON.parse(auth).username

    useEffect(()=>{
        axios.get(`http://localhost:8000/posts/${id}`).then(({data})=>{
        settitle(data.title)
        setdesc(data.desc)
    })
},[])

    const updatePost = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/posts/${id}`,{
            title : title,
            desc: desc,
            author:userName
        }).then((resp)=>{
            alert("Blog Updated Successfully")
            navigate("/")
        }).catch((err)=>{
            console.log(err)
    })
    }

  return (
    <div className="container" style={{  maxWidth:'50%' ,margin: 'auto', marginTop:'100px' }}>
        
    <form>
                <h3>Add Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" placeholder="Enter Title"  value={ title } onChange={(e)=>settitle(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea type="text" style={{ height:"250px" }} className="form-control" placeholder="Enter description" value={ desc } onChange={(e)=>setdesc(e.target.value)} required/>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary btn-block" onClick={(e)=>updatePost(e)}>Submit</button>
               
            </form>
            </div>
  )
}

export default EditPost;