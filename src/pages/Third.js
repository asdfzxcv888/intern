import React from 'react'
const images=['https://templates.hibootstrap.com/medsev/default/assets/img/doctor/3.jpg','https://thumbs.dreamstime.com/b/medical-doctor-23778758.jpg']


const Third = ({heading}) => {
    const x=Math.floor(Math.random() * 2)
    
        return (<div className='third'>
        <img src={images[x]}></img>

        <div>
        <h3>{heading}</h3>
        
        <p>ltreating disorders and other issues related to the ear, nose, throat, and related head and neck</p>
        <button>Read more</button>

        </div>
        
    </div>)
}

export default Third