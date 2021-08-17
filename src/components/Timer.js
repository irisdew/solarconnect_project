import React from "react";

const Timer = ({ locale }) => {
  const today = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

  return (
    <div className="container">
      <p>{today.toLocaleDateString(locale, options)}</p>
    </div>
  );
};

export default Timer;
