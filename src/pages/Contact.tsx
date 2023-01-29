import React from "react";
import ContactImage from "../img/02.png";
import Contact_cont from "./Contact_cont";

function Contact() {
  return (
    <div className="h-screen bg-secondary">
      <div className="columns-2">
        <img src={ContactImage} alt="" />
        <div className="mt-30">
          <Contact_cont></Contact_cont>
        </div>
      </div>
    </div>
  );
}

export default Contact;
