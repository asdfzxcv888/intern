import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',marginBottom:'70vh',marginTop:'2%'}}><form style={{width:'50%',border:'0.5rem black solid',padding:'2%'}}>
        <label><h1>username</h1></label>
        <input style={{width:'70%'}} value={'yourname'}></input>
        <br></br>
        <label ><h1>password</h1></label>

        <input style={{width:'70%',}} type='password' value={'password'}></input><br></br>
        <Link to ='/'>
        <button style={{width:'10%',backgroundColor:'skyblue',border:'0.2rem black solid',marginLeft:'40%',marginTop:'2%'}}>Login</button>

        </Link>
        
        </form></div>
  )
}

export default Login