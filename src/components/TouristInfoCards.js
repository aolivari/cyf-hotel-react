import React from "react";
import Card from "./Cards";
import { places } from "../data/places";

function TouristInfoCards() {
  return (
    <div className="container mt-3 d-flex justify-content-center">
      <div className="row">
        {places.map(place => (
          <div className="col-md-4 d-flex align-items-stretch" key={place.city}>
            <Card
              img={place.img}
              city={place.city}
              description={place.description}
              url={place.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TouristInfoCards;
