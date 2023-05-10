import React from "react";
import Navbar from "./NavBar";
import "./about.css";
import vectorOne from "../images/about page/Vector.png";
import vectorTwo from "../images/about page/vuesax/bold/Vector-1.png";
import vectorThree from "../images/about page/vuesax/bold/Vector.png";
function About() {
  return (
    <div className="about_page">
      <Navbar></Navbar>
      <section className="pargraph">
        <h1>
          We Are Building One Platform for All <span>Payroll Things</span>
        </h1>
        <p>
          Payrole is innovative online platform to hire and pay international
          employees and freelancers.
        </p>
      </section>
      <section className="box_modules">
        <p>Let the numbers speak for themselves.</p>
        <div className="box_modules_icons">
          <div className="icon_div">
            <img src={vectorOne} alt="" />
            <div className="content">
              <span>3.3M+</span>
              <span>vectorOne</span>
            </div>
          </div>
          <div className="icon_div">
            <img src={vectorThree} alt="" />
            <div className="content">
              <span>3.3M+</span>
              <span>vectorOne</span>
            </div>
          </div>
          <div className="icon_div">
            <img src={vectorTwo} alt="" />
            <div className="content">
              <span>3.3M+</span>
              <span className="coloredWhite">vectorOne</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
