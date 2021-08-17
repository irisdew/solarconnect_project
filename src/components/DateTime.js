import React from 'react';

function DateTime({ type }) {
  const date = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className="wrapper__time">
      {date.toLocaleDateString(type, options)}
    </div>
  );
}

export default DateTime;
