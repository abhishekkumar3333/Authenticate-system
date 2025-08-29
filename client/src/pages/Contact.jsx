import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactData);
  };

  return (
    <>
      <section>
        <div className="main-div">
          {/* Contact Image */}
          <div className="contact-img">
            <img
              src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_23-2148236763.jpg"
              alt="Contact Us"
            />
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                value={contactData.username}
                placeholder="Enter Your Name"
                required
                onChange={handleOnChange}
              />

              <input
                type="email"
                name="email"
                value={contactData.email}
                placeholder="Enter Your Email"
                required
                onChange={handleOnChange}
              />

              <textarea
                name="message"
                value={contactData.message}
                placeholder="Enter Your Message"
                required
                onChange={handleOnChange}
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="map-container">
          <h2>Find Us on Map</h2>
          <iframe
            title="India Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30269248.402093276!2d60.93027211888724!3d19.680928218791167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635f1b742a4c47%3A0x62cb55794c35c3d!2sIndia!5e0!3m2!1sen!2sin!4v1692091821300!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
