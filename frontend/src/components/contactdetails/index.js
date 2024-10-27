"use client"
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";



const ContactCard = ({ title, icon, subHeading, link }) => (
  <a href={link} className="card p-4 bg-light border rounded mb-3 text-center">
    <div className="text-primary display-4 mb-2">{icon}</div>
    <h3 className="h5 font-weight-bold text-dark">{title}</h3>
    <p className="text-muted">{subHeading}</p>
  </a>
);



function ContactForm() {
    const categories = [
      {
        title: "Email",
        subHeading: "brjewellers.com",
        icon: <AiOutlineMail />,
        link: "mailto:brjewellers.com"
      },
      {
        title: "Phone",
        subHeading: "+91-9876543214",
        icon: <FaPhone />,
        link: "tel:+91-6367189383"
      },
      {
        title: "Instagram",
        subHeading: "BR jewellery",
        icon: <LuInstagram />,
        link: "https://www.instagram.com/"
      },
    ];
  
    return (
      <div className="container my-5">
        <h2 className="text-center mb-4">Get in Touch with Us</h2>
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-md-4" key={index}>
              <ContactCard {...category} />
            </div>
          ))}
        </div>
      </div>
    );
  };


  export default ContactForm;