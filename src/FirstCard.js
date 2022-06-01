import React from "react";

class FirstCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="card d-flex bg-secondary text-white text-center justify-content-center align-items-center Port">
          <h4>{this.props.portfolio1}</h4>
          <hr />
        </div>
      </>
    );
  }
}
export default FirstCard;
