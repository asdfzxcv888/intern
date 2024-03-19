import React from 'react'
import { useGlobalContext } from '../globalcontext/Useglobalcontext'
import { Link } from 'react-router-dom'
import './nav.css'


const Navbar = () => {

    const{}=useGlobalContext()

  return (
    <div className='navbar'>
        <p>Doctors</p>
        <input type='text' placeholder='search doctors here'></input>
        <div className='nav-btn-container'>


        <Link to='/'  ><  button  className='nav-button'>Home</button></Link>
        <Link to='/profile'><button className='nav-button'>profile</button></Link>

        <Link to='/appointment'><button className='nav-button'> appointments</button></Link>

        <Link to='/doctors'><button  className='nav-button'>doctors</button></Link>
        <Link to='/login'><button  className='nav-button'>Login</button></Link>

        </div>
       

        
    </div>
  )
}

export default Navbar