import React, { useState } from 'react'
import { useGlobalContext } from '../globalcontext/Useglobalcontext'
import './Doctors.css'
import Docholder from './Docholder'

const Doctors = () => {
  const doctors=['']
    const {}=useGlobalContext()




  return (
    <div>
      <div className='doc1'>Our Doctors</div>
      <div className='doc2'>Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</div>
      <div className='doc-navbar'>
        <button>All</button>
        <button>Nurologist</button>

        <button>Cardiologist</button>
        <button>Dermatologist</button>



      </div>


      <div className='doc-holder'>
       <Docholder name='doc1' rating='5'></Docholder>
       <Docholder name='doc2' rating='4.5'></Docholder>
       <Docholder name='doc3' rating='5'></Docholder>
       <Docholder name='doc4' rating='4.5'></Docholder>

      </div>


<button style={{marginLeft:'50%'}}>see more</button>

    </div>
  )
}

export default Doctors