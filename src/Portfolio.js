import React from "react";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import FourthCard from "./FourthCard";
import FivthCard from "./FivthCard";
import SixthCard from "./SixthCard";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      portfolio1: "Web Design",
      portfolio2: "Mobile Design",
      portfolio3: "Logo Design",
      portfolio4: "Web Application Development",
      portfolio5: "Mobile Application Development ",
      portfolio6: "PWA Development",
    };
  }

  render() {
    return (
      <>
        <div className="d-flex flex-column justify-content-center my-4">
          <h2 className="mx-5 aboutMe">Portfolio</h2>
          <div className="d-flex flex-column justify-content-center my-5">
            <div className="d-flex justify-content-around ">
              <FirstCard portfolio1={this.state.portfolio1} />
              <SecondCard portfolio2={this.state.portfolio2} />
              <ThirdCard portfolio3={this.state.portfolio3} />
            </div>
            <div className="d-flex justify-content-around my-5">
              <FourthCard portfolio4={this.state.portfolio4} />
              <FivthCard portfolio5={this.state.portfolio5} />
              <SixthCard portfolio6={this.state.portfolio6} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Portfolio;
