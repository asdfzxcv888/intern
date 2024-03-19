import React from 'react'
import './appointment.css'
import { Link } from 'react-router-dom'

const Appointment = () => {
  return (
    <div >
        <div className='appointment'><h1>Book your appointment</h1>
        <p>Great doctor if you need your family member to get effective immediate

assistance, emergency treatment or a simple consultation.</p></div>
<div >
    <form className='app-form'>
        <h1 style={{textAlign:'center',backgroundColor:'green',width:'100%'}}>BOOK YOUR APPOINTMENT</h1>
        <div>
        <label  style={{fontWeight:'bolder'}}>patient name:</label>
        <input type='text'></input>
        
        </div>
       
        <div>
        <label style={{fontWeight:'bolder'}}>Department:</label>
        <input type='text'></input>
        </div>

        <div style={{display:'flex'}}>
            <div style={{width:'50%'}}>  <label style={{fontWeight:'bolder'}}>mail:</label>
        <input type='text'></input></div>
       
        <div style={{width:'50%'}}> <label style={{fontWeight:'bolder'}}>phone:</label>
        <input type='text'></input></div>
        </div>

        <div>
        <label style={{fontWeight:'bolder'}}>comments:</label>
        <input type='text' style={{height:'50px' ,marginBottom:'20px'}}></input>
        </div>
        <Link to={'/payment'}><button style={{marginLeft:'45%',marginBottom:'20px'}}>Book</button></Link>
    </form>

</div>
    
    
    
    </div>
  )
}

export default Appointment