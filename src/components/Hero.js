import React from "react";
import heroImg from "../asesets/images/Hero.jpg";

export default function Hero() {
  return (
    <main>
      <div className="main--image">
        <img src={heroImg} alt="/"></img>
      </div>
      <h3>Adeniran Adekola</h3>
      <p>Frontend Developer</p>
      <h4>adekola.website</h4>
      <div className="main__social">
        <a
          className="main__social__email"
          href="mailto:adeniranadekola84@gmail.com?subject=subject text"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-envelope"></i>Email
        </a>
        <a
          className="main__social__linkedin"
          href="https://www.linkedin.com/in/adeniran-adekola-4067a7203"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin"></i>LinkedIn
        </a>
      </div>
    </main>
  );
}
