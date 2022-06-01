import React from "react";

class AboutMe extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="d-flex my-4">
          <div className="col-3 text-center my-3">
            <h1 className="aboutMe">About Me</h1>
          </div>
          <div className="col-8 text-left">
            <p className="text-dark ">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <a href="./download.txt" download="download">
              <button className="btn text-white aboutBtn">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </>
    );
  }
}
export default AboutMe;
