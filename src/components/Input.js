import React from "react";

const Input = ({ value, onChangeHandler }) => {
  return (
    <div className="container">
      <input type="text" placeholder="1, 2, 3, 4" value={value} onChange={onChangeHandler} />
    </div>
  );
};

export default Input;
