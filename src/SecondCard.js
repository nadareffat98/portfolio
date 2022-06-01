import React from "react";

class SecondCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="card d-flex justify-content-center align-items-center bg-dark text-white text-center pt-4 Port">
          <h4>{this.props.portfolio2}</h4>
          <hr/>
        </div>
      </>
    );
  }
}
export default SecondCard;