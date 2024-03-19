import React from 'react'
import './2.css'
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Docholder = ({name,rating}) => {
  return (
    <div className='doc-parent'>
        <img src='https://templates.hibootstrap.com/medsev/default/assets/img/doctor/3.jpg'></img>
        <div>
        <h4>{name}</h4>
        <p>Jorem ipsum dolor, consectetur adipiscing elit. Nunc v libero et velit interdum, ac mattis.


        </p>
        <Link to={'/appointment'}>        <button>Book now..</button>
</Link>
        <div>
        <FaStar style={{display:'inline'}}></FaStar>
        
        <h1 style={{display:'inline',marginLeft:'10px'}}>{rating}</h1>
        </div>
        

        </div>


    </div>
  )
}

export default Docholder