import React from "react";

class ThirdCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="card d-flex justify-content-center align-items-center bg-secondary text-white text-center pt-4 Port">
          <h4>{this.props.portfolio3}</h4>
          <hr />
        </div>
      </>
    );
  }
}
export default ThirdCard;