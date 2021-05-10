import React, { useState } from "react";

function Order(props) {
  const [qtty, setQtty] = useState(0);

  return (
    <li>
      {props.name} {qtty}{" "}
      <button className="btn btn-primary" onClick={() => setQtty(qtty + 1)}>
        Add
      </button>
    </li>
  );
}

export default Order;
