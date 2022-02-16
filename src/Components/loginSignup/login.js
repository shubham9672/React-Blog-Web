import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login(){
     const navigate = useNavigate();
  const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const [users, setusers] = useState("")
     useEffect(()=>{
    const auth = sessionStorage.getItem("user");
    if (auth){
      navigate("/")
    }

    else{
      axios.get("http://localhost:8000/users").then(({data})=>{
      setusers(data)
      })
    }
  },[])
  const loginUser = (e)=>{
    e.preventDefault()
    let flag = false
    for(var i=0; i<users.length; i++){
      if (users[i].email === email && users[i].password === password){
        sessionStorage.setItem("user",JSON.stringify({"email":users[i].email,"username":users[i].username}));
        flag=true;
      }
      
    }
    if (flag === true)
      navigate('/')
    else
      alert("Invalid Credentials")
    
  }
    return (
    <div className="container" style={{  maxWidth:'50%' ,margin: 'auto', marginTop:'100px' }}>
        
    <form>
                <h3>Log In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>setemail(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>setpassword(e.target.value)} required/>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary btn-block" onClick={(e)=>loginUser(e)}>Submit</button>
               
            </form>
            </div>);
}
export default Login;