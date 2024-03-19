import React,{useState} from 'react'
import './profile.css'
import { GrLinkNext } from "react-icons/gr";
import { useGlobalContext } from '../globalcontext/Useglobalcontext';
const Profile = () => {
  const{name,phone,changename,changephone}=useGlobalContext()

  const [update,setupdate]=useState('true')
  const [update2,setupdate2]=useState('true')


  const[newname,setnewname]=useState(name)
  const[newphone,setnewphone]=useState(phone)

  return (
    <div>
      <div><h1>User profile</h1></div>
      <div className='usr-profile'>
        <div className='usr-profile1'><img src='https://cdn.lifehack.org/wp-content/uploads/2015/02/what-makes-people-happy.jpeg'></img>
        
        <div className='usr-details'>
        <p>{name}</p>
        <br></br>
        <p>35 yrs old</p>

        </div>
        </div>
        <div className='usr-profile2' style={{display:`${update&&update2?'inline-block':'none'}`}}>
        <div>
          <div className='doc-scroll'><p>Appointments history</p><button onClick={()=>setupdate2(!update2)}><GrLinkNext/></button></div>
          <div className='doc-scroll'><p>Saved doctors</p><button><GrLinkNext/></button></div>
          <div className='doc-scroll'><p>Patient Health History</p><button><GrLinkNext/></button></div>
          <div ><button className='update-btn' onClick={()=>setupdate(!update)}>update</button></div>

        </div>




        </div>

        <div className='update-profile'  style={{display:`${update?'none':'inline-block'}`}}>
          
          <div>
            <form>
              <label>name</label>
              <input onChange={(e)=>setnewname(e.target.value)}></input>
              <br></br>
              <label>email</label>
              <input></input>
              <br></br>

              <label>phone no</label>
              <input onChange={(e)=>setnewphone(e.target.value)}></input>
              <br></br>

              <label>Bio</label>
              <input></input>

            </form>
          </div>
          <button onClick={()=>{setupdate(!update)
          changename(newname)
          changephone(newphone)

          
          }}>update profile</button>
        </div>


        <div className='app-history' style={{display:`${update2?'none':'inline-block'}`}}>

          <div className='ho'><h3>Covid Test </h3>
         <div className='dr'><p>Dr zhena</p>  <p>30th march</p></div> </div>


          <div className='ho'><h3>Dentist </h3>
          <div className='dr'><p>Dr calvin klien</p>  <p>30th march</p></div>
          </div>

          <h3>Appointment history</h3>
          <button onClick={()=>setupdate2(!update2)}>Back</button>

        </div>

        

      </div>
     

      <div className='extra-usr-data'>

        <div></div><label>Gender:</label><p>Male</p>
        <div></div><label>DOB:</label><p>24/02/2000</p>
        <div></div><label>Phone No:</label><p>{phone}</p>
        <div></div> <label>Address:</label><p>Sydney, Australia</p>
        <div></div> <label>Blood Group:</label><p>B+ve</p>

      </div>

    </div>
  )
}

export default Profile