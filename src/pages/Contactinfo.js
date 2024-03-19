import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { GiLetterBomb } from "react-icons/gi";

const Contactinfo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "skyblue",
        // position: 'relative',
        // bottom:'0',
        width:'100vw',
      }}
    >
      <h1 style={{ margin: "auto" }}>Doctors</h1>
      <p style={{ width: "30%", margin: "auto" }}>
        Thank you for visiting my website, and I look forward to being a part of
        your wellness journey. Let's thrive together!
      </p>
      <p>
        <FaPhoneSquareAlt />
        +91-1234567890<br></br>
        <GiLetterBomb /> contact@gmail.com
      </p>
    </div>
  );
};

export default Contactinfo;
