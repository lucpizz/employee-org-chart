import React, { useState } from "react";

// class About extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Luca",
//     };
//   }
//   render() {
//     return <h1>{this.state.name} is here</h1>;
//   }
// }

const About = (props) => {
  const [name, setName] = useState();

  return (
    <div>
      <h1>Hello, {name}</h1>
      <label for="name">What is your name?</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default About;
