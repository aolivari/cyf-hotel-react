import React from "react";
import Order from "./Order";

const Restaurant = () => {
  const food = ["pizza", "Salads", "Chocolate cake"];

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        {food.map(food => (
          <Order name={food} />
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
