"use client"
import React, { useState } from "react";



function ContactForm () {
    const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        const response = await axios.post("/api/contact", formData);
        if (response.status === 201) alert("Your message has been sent successfully.");
        setFormData({ name: "", phone: "", message: "" });
      } catch (error) {
        alert("Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    };
  
    return (
      <div className="container my-5">
        <h3 className="text-center mb-4">Send Us a Message</h3>
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px" }}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    );
  };

  export default ContactForm;