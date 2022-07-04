import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2w3mi54', 'template_o9o8w49', form.current, '-GnJU9lc96so5VZ4K')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form">
      <div className="c-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" class="user" placeholder="Name" />
          <input
            type="text"
            name="user_email"
            class="user"
            placeholder="Email"
          />
          <textarea name="message" class="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for contacting me!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
