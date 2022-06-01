import React from "react";
import "./Style.css"

class HeroSection extends React.Component {
  constructor() {
    super();
    this.state={
        name:"Nada Reffat",
        job:"Full Stack Web Developer"
    }
  }

  render() {
    return (
        <header className="HeroSec text-white d-flex flex-column justify-content-center my-1">
            {/* <img src="/imgs/profile.jpeg" alt="profile" className="rounded-circle"/> */}
            <h1 className="offset-1 my-3">{this.state.name}</h1>
            <h1 className="my-3 mx-4">{this.state.job}</h1>
            <button className="text-white my-4 cursor-pointer ContactMe">Contact Me</button>
        </header>
    );
  }
}
export default HeroSection;
