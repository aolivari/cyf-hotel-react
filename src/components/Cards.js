import React from "react";

function Card(props) {
  return (
    <div className="card border border-info">
      <img src={props.img} alt="Image of place" />

      <div className="card-body text-center">
        <h3 className="card-title">{props.city}</h3>
        <p className="card-text">{props.description}</p>
        <a href={props.url} className="btn btn-outline-info">
          More information
        </a>
      </div>
    </div>
  );
}

export default Card;
