import React from "react";
import ContactImage from "../img/02.png";

function Contact() {
  return (
    <div className="h-screen bg-secondary">
      <div className="columns-2">
        <img src={ContactImage} alt="" />
        <div></div>
      </div>
    </div>
  );
}

export default Contact;
