import React from "react";
import Profile from "../../assets/prof.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>John Nigels Sipe </span> Frontend Developer
          </h1>

          <p className="home__description">
            I am an ambitious Filipino individual, passionate about mastering
            the art of frontend development with a determined focus on honing my
            skills and creating innovative web experiences. I am driven to excel
            in my journey as a frontend developer, seeking opportunities to
            contribute my talents and expertise to the ever-evolving landscape
            of web development.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
