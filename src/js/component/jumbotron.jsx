import React from "react";

const Jumbotron = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#F3F3F3" }}>
    <div className="container">
      <div className="jumbotron-fluid pt-5">
        <h1 className="display-3">A Warm Welcome!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style
          component for calling extra attention to featured
          content or information.
        </p>

        <a
          className="btn btn-primary btn-lg"
          href="#"
          role="button">
          Call to action!
        </a>
        <hr className="my-5"></hr>
      </div>
    </div>
  </div>
  );
};
export default Jumbotron;
