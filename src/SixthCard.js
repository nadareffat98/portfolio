import React from "react";

class SixthCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="card d-flex justify-content-center align-items-center bg-secondary text-white text-center pt-4 Port">
          <h4>{this.props.portfolio6}</h4>
          <hr />
        </div>
      </>
    );
  }
}
export default SixthCard;