import React from 'react'
const images=['https://templates.hibootstrap.com/medsev/default/assets/img/doctor/3.jpg','https://thumbs.dreamstime.com/b/medical-doctor-23778758.jpg',


'https://thumbs.dreamstime.com/b/african-female-doctor-hospital-healthcare-medical-concept-smiling-34104971.jpg']



const Seconditems = ({heading,invert}) => {
    
   const x=Math.floor(Math.random() * 3)
   
   
  return (
    <div className='seconditems'>
        <div>
        <h3>{heading}</h3>
        
        <p>ltreating disorders and other issues related to the ear, nose, throat, and related head and neck</p>
        <button>Read more</button>

        </div>
        <img src={images[x]}></img>
        
    </div>
  )
}

export default Seconditems