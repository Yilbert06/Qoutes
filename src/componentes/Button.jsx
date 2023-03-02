import React from "react";

const Button = ({ changeCards }) => {
  return (
    <button onClick={changeCards}>
      <h3>Next</h3>
    </button>
  );
};

export default Button;
