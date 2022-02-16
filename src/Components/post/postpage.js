import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ReadPost(){
    const id = useParams().id
    const [post, setpost] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/posts/${id}`).then(({data})=>{
        setpost(data)
    })
},[])

    return(
        <div className="container" style={{  maxWidth:'75%' ,margin: 'auto', marginTop:'100px' }}>
            
        <div className="row">
        <div className="card" id="design">
        <div className="card-body" >
            <h1 className="card-title" id="centers" >{post.title}</h1>
            <p className="card-text">{post.desc} </p>
            <p className="text-muted" style={{ textAlign: "right"}}>Author : {post.author}</p>
        </div>
        
    </div>
    </div>
    </div>
    )
}
export default ReadPost;