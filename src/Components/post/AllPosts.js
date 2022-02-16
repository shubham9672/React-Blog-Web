import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function AllPost(){
const [posts, setposts] = useState("")
    const navigate = useNavigate();
    const auth = sessionStorage.getItem("user")
    const userName = JSON.parse(auth).username
    let [allposts,setallpost]=useState("")
    useEffect(()=>{
        axios.get("http://localhost:8000/posts").then(({data})=>{
            
        setallpost(data.filter(function(author) {
    return author.author === userName;
  }))
    })
    // let temp=posts.filter((auto) => auto.author.includes(userName));
    // setallpost(temp)
})
// console.log(allposts);
const editPost = (id)=>{
  navigate(`/editpost/${id}`)
}
const deletePost = (id)=>{
  axios.delete(`http://localhost:8000/posts/${id}`)
}

    return (
        <div className="container" style={{  maxWidth:'75%' ,margin: 'auto', marginTop:'100px' }}>
<div className="col-sm-10 my-5">
    <a href="/addpost" className="btn btn-success">Add Post</a>
    <h4 className="text-center alert alert-info mt-3">Show Information</h4>
    { allposts?
    (<table className="table table-hover">
        <thead>
            <tr className="text-center">
                <th scope="col" style={{ width:"2%" }}>ID</th>
                <th scope="col" style={{ width:"28%" }}>Title</th>
                <th scope="col"style={{ width:"55%" }}>Description</th>
                <th scope="col"  style={{ width:"15%" }}>Action</th>
            </tr>
        </thead>
        <tbody>
            { allposts.map((post,i)=>{ 
               return <tr>
                    <th scope="row">{i+1}</th>
                    <td>{post.title}</td>
                    <td>{post.desc.slice(0,50)}..</td>
                    <td className="text-center">
                        <button  className="btn btn-warning btn-sm m-1"  onClick={(e)=>editPost(post.id)}>Edit</button>
                        <form  className="d-inline">
                            <input type="submit" className="btn btn-danger btn-sm" value="Delete" onClick={(e)=>deletePost(post.id)}></input>
                        </form>
                    </td>
                </tr>})}
        </tbody>
    </table>):
        <h4 className="text-center alert alert-warning">No Records</h4>
            }
    
</div>
</div>
    )
}
export default AllPost;