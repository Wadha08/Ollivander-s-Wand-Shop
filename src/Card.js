import React from "react";

function Card(props) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <img
          className="card-img-top img-fluid"
          src={props.wand.imageUrl}
          alt=".."
        />
        <div className="card-body">
          <h5 className="card-title">
            <span>{props.wand.core}</span>
          </h5>
          <small className="card-text">
            type: {props.wand.wood} <br />
            length:{props.wand.length}
          </small>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Card;
