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
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
        voluptas eos nemo animi perferendis harum veritatis voluptatum
        blanditiis autem accusantium aut eum, eaque voluptates laudantium
        excepturi, rerum rem repudiandae quas.
      </p>
      <br />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
        voluptas eos nemo animi perferendis harum veritatis voluptatum
        blanditiis autem accusantium aut eum, eaque voluptates laudantium
        excepturi, rerum rem repudiandae quas.
      </p>
    </div>
  );
};

export default About;
