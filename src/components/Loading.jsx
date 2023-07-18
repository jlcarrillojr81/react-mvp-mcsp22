import React, { useState, useEffect } from 'react';
import './loading.css';

const Loading = () => {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((dots) => (dots + 1) % 4);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="loading">
      <span>Loading{Array.from({ length: dots }).map((_, index) => (
        <span key={index} className="dot" style={{ '--index': index }}>.</span>
      ))}</span>
    </div>
  );
};

export default Loading;





// import React from 'react'
// import './App.css'

// function Loading() {
//     return <h1>Loading</h1>
// }

// export default Loading