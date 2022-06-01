import React from "react";

class FivthCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="card d-flex justify-content-center align-items-center bg-dark text-white text-center pt-2 Port">
          <h4>{this.props.portfolio5}</h4>
          <hr/>
        </div>
      </>
    );
  }
}
export default FivthCard;