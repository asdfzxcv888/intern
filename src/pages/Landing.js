import React from "react";
import "./Landing.css";
import Seconditems from "./Seconditems";
import Third from "./Third";
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
      <div>
        <div className="Land-div">
          <div style={{ width: "50%" }}>
            <p className="welcome-div">
              Find your near by doctor & book your appointment & get treatment
              fast
            </p>
            <form>
              <label>
                <h3 className="land-head">Select your appointment type</h3>
              </label>
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <br></br>
              <label>
                <h3 className="land-head">patient name</h3>
              </label>
              <input style={{marginBottom:'2%'}}></input><br></br>
             <Link to ='/appointment'><button style={{backgroundColor:'skyblue',fontWeight:'bolder',border:'0.1rem black solid',padding:'2%'}}>Booking now</button></Link> 
            </form>
          </div>
          <img
            className="dr-img"
            src="https://img.freepik.com/premium-photo/indian-doctor-wearing-white-coat-with-stethoscope_85574-3676.jpg?w=2000"
          ></img>
        </div>
      </div>

      <div
        style={{
          width: "50vw",
          marginLeft: "25vw",
          backgroundColor: "skyblue",
          marginTop: "2%",
          zIndex: "2",
          position: "relative",
          border: "0.1rem solid black",
          borderRadius: "0.5rem",
          textAlign: "center",
          height:'50px',
          paddingTop:'10px',
          fontWeight:'bolder',
          fontSize:'larger',
        }}
      >
        Easy steps to book your Appointment
      </div>
      <div
        className="round-holder"
        style={{ marginTop: "-1.7%", zIndex: "1", position: "relative",borderRadius:'25px' }}
      >
        <div className="round-div">
          <p>Select the location and search near by doctor</p>
        </div>
        <div className="round-div">
          <p>Schedule and Book your date and time for appointment</p>
        </div>
        <div className="round-div">
          <p>Easy way to make payment in multiple getway</p>
        </div>
      </div>

      <div className="el">
        <div>
          <img src="https://clipart-library.com/images_k/transparent-doctor/transparent-doctor-25.png"></img>
        </div>
        <div>
          <h1 style={{ color: "skyblue" }}>
            Experienced doctor analyse the patient giving them aproper treatment
          </h1>

          <p>
            Doctor availability
            <br />
            Treatment & Consulting
            <br />
            Top Specialist doctor
            <br />
            Apply coupon for treatment
          </p>
          <button>Book Appointment</button>
        </div>
      </div>

      <div>
        <h1 style={{ textAlign: "center" }}>
          Variouse specialist are here you to take care of your Health
        </h1>
        <p style={{ textAlign: "center" }}>
          Doctors are available at any time to care your health
        </p>
        <div className="second-flex">
          <Seconditems heading={"ENT Specialist"}></Seconditems>
          <Seconditems heading={"Specialist Endocrinologis"}></Seconditems>

          <Seconditems heading={"Specialist Oncologists"}></Seconditems>

          <Seconditems heading={"Specialist Pulmonologist"}></Seconditems>

          <Seconditems heading={"Specialist Veterinarian"}></Seconditems>

          <Seconditems heading={"Specialist Radiologist"}></Seconditems>
        </div>
      </div>

      <h1 style={{ textAlign: "center" }}>Our Top Rated Doctors</h1>
      <p style={{ textAlign: "center" }}>
        Top Rated Doctors are available at any time to care your health
      </p>
      <div className="third-flex">
        <Third heading={"DR.pawan"} invert={"true"}></Third>
        <Third heading={"Dr wanitha"} invert={"true"}></Third>

        <Third heading={"Dr udara"} invert={"true"}></Third>

        <Third heading={"Dr john"} invert={"true"}></Third>
      </div>

      <h1>Customers Feedback</h1>
      <div>
        <p style={{ display: "inline-block", width: "30%" }}>
          Our users share stories of satisfaction, trust, and exceptional
          experiences. Explore now!
        </p>
        <button style={{ marginLeft: "50%" }}>Previous</button>{" "}
        <button>next</button>
      </div>

      <div className="customer-feedback">
        <div>
          <img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710547200&semt=ais"></img>
          <h3>Natalie Summers</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the 1500s
          </p>
        </div>


        <div>
        <img src="https://preview.redd.it/rwl5o5xm2tv71.jpg?width=640&crop=smart&auto=webp&s=ed06c6952948f95b91e09bdc4988ea1e1fab449b"></img>
          <h3>Owen Evanss</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the 1500s
          </p>

        </div>




        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVeTLnUbv8mNk5qxugU3PdNduUzCTWGHxawg&usqp=CAU"></img>
          <h3>Alex Turners</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the 1500s
          </p>



        </div>
      </div>
    </>
  );
};

export default Landing;
