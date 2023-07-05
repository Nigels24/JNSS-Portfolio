import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTelegramPlane,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o94edbf",
        "template_j9y976t",
        form.current,
        "nRgpXarju8NJoiT8P"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, ideas or opportunities to be part of your visions
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">nigesipe@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+63 9667 705 924</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://web.facebook.com/nigel.sipe/"
              className="contact__social-link"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://web.telegram.org/k/"
              className="contact__social-link"
            >
              <FaTelegramPlane />
            </a>

            <a
              href="https://www.linkedin.com/in/john-nigels-sipe-7b8855275/"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Nigels24"
              className="contact__social-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                name="user_name"
                required
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                name="user_email"
                required
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                name="subject"
                required
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Message"
              className="form__control textarea"
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
