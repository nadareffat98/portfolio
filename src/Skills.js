import React from "react";
import ReactDOM from "react-dom";
import HSBar from "react-horizontal-stacked-bar-chart";

class Skills extends React.Component {
  constructor() {
    super();
    this.state=
    {
      title:"Skills"
    }
  }

  render() {
    return (
      <>
        <div className="d-flex flex-column Skills">
          <div className="text-center my-5 mx-5">
            <h2 className="text-white mx-5 skill">{this.state.title}</h2>
            <p className="text-white my-4 mx-5">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
          <div className="d-flex ">
            <div className="col-3 offset-2 text-white my-5">
              <h5 className="mx-4 my-1">My Focus</h5>
              <hr className="mx-0" />
              <h5 className="mx-4 my-2">UI/UX Design</h5>
              <h5 className="mx-4 my-2">Web Design</h5>
              <h5 className="mx-4 my-2">Mobile App Design</h5>
            </div>
            <div className="col-5 d-flex flex-column justify-content-center">
              <div className="d-flex my-1">
                <p className="bg-secondary text-white text-center HSbar">HTML</p>
                <HSBar
                  data={[
                    { value: 200, color: "rgb(131, 118, 118)" },
                    { value: 30, color: "white" },
                  ]}
                />
              </div>
              <div className="d-flex my-1">
                <p className="bg-secondary text-white text-center HSbar">CSS</p>
                <HSBar
                  data={[
                    { value: 150, color: "rgb(131, 118, 118)" },
                    { value: 80, color: "white" },
                  ]}
                />
              </div>
              <div className="d-flex my-1">
                <p className="bg-secondary text-white text-center HSbar">JavaScript</p>
                <HSBar
                  data={[
                    { value: 100, color: "rgb(131, 118, 118)" },
                    { value: 130, color: "white" },
                  ]}
                />
              </div>
              <div className="d-flex my-1">
                <p className="bg-secondary text-white text-center HSbar">React</p>
                <HSBar
                  data={[
                    { value: 200, color: "rgb(131, 118, 118)" },
                    { value: 30, color: "white" },
                  ]}
                />
              </div>
              <div className="d-flex my-1">
                <p className="bg-secondary text-white text-center HSbar">PhotoShop</p>
                <HSBar
                  data={[
                    { value: 170, color: "rgb(131, 118, 118)" },
                    { value: 60, color: "white" },
                  ]}
                />
              </div>
              <div className="d-flex my-1 mb-5">
                <p className="bg-secondary text-white text-center HSbar">Node.js</p>
                <HSBar
                  data={[
                    { value: 160, color: "rgb(131, 118, 118)" },
                    { value: 70, color: "white" },
                  ]}
                />
              </div>

            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Skills;
