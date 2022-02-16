import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function HomePage(){
    const [posts, setposts] = useState("")
     const navigate = useNavigate();
       useEffect(()=>{
        axios.get("http://localhost:8000/posts").then(({data})=>{
        setposts(data)
    })
})
function getpage(id){
    navigate(`/post/${id}`)
}
    return(
        <div className="container" style={{  maxWidth:'75%' ,margin: 'auto', marginTop:'100px' }}>
     
      {
          posts?
        posts.map((item,i)=>{
           return <div style={{ marginBottom:'10px' }} key={item.id}>
            <Card>
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text>
     {item.desc.slice(0,220)}.........
    </Card.Text>
    <Button variant="primary" onClick={(e)=>getpage(item.id)}>Read More</Button>
  </Card.Body>
  <Card.Footer>
      <small className="text-muted">By: {item.author}</small>
    </Card.Footer>
</Card>

</div>
        }): <h1>No Post Found</h1>}
        </div>
    );
}
export default HomePage;