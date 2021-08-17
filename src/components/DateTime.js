import React, { useState, useEffect } from 'react';

function DateTime({ type }) {
  const [time, setTime] = useState(null);
  const date = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  useEffect(() => {
    setTime(date.toLocaleDateString(type, options));
  }, []);

  setInterval(() => {
    setTime(date.toLocaleDateString(type, options));
  }, 18000);

  console.log(time);
  return (
    <div className="wrapper__time">
      <p>{time}</p>
    </div>
  );
}
export default DateTime;
