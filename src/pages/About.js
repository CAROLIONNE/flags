import React from "react";
import Logo from "../composants/Logo";
import Navigation from "../composants/Navigation";

const About = (props) => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>A propos</h1>
      <br />
      <p>250 pays sont visibles sur ce site</p>
      <br />
      <p>
        Vous y retrouverez le drapeau, le nom du pays, la capitale ainsi que la
        population.
      </p>
      <br />
      <p>
        Vous avez la possibilité de choisir le nombre de pays qui s'affichent
        ainsi que filtrer par continent
      </p>
    </div>
  );
};

export default About;
