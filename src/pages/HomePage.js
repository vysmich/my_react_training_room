import React from "react";
import Hero from "../img/gif.gif";
import GitHub from "../img/icons8-github-64.png";
import LinkedIn from "../img/icons8-linkedin-64.png";
import Gmail from "../img/Gmail-Logo-700x394.png";
import "./HomePage.scss";
const HomePage = () => {
  return (
    <main>
      <div className="container home-page">
        <h1>Hello, I'm Michal Vyskočil</h1>
        <p>I am a junior frontend developer/ coder</p>
        <p>and this is my training room to improve my React.js skills</p>
        <div className="contacts">
          <a href="https://github.com/vysmich">
            <img src={GitHub} alt="Github logo" />
          </a>
          <a href="https://www.linkedin.com/in/vysmich/">
            <img src={LinkedIn} alt="LinkedIn logo" />
          </a>
          <a href="mailto:vysmich@gmail.com">
            <img src={Gmail} alt="LinkedIn logo" />
          </a>
        </div>
        <img src={Hero} alt="" className="hero" />
      </div>
    </main>
  );
};

export default HomePage;
