import React from 'react';

function TodaysDate() {
  const getFormattedDate = () => {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `Today's Todos ${month}/${day}/${year}`;
  };

  return <h2 className="date-component"> {getFormattedDate()}</h2>;
}


export default TodaysDate
