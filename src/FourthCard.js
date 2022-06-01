import React from "react";

class FourthCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="card d-flex justify-content-center align-items-center bg-secondary text-white text-center pt-2 Port">
          <h4>{this.props.portfolio4}</h4>
          <hr />
        </div>
      </>
    );
  }
}
export default FourthCard;