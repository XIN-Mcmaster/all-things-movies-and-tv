import React from "react";

const Loading = () => {
  return (
    <div className='ontario-loading-indicator__overlay' aria-hidden='false' role='alert' aria-live='assertive'>
      <div className='ontario-loading-indicator'>
        <svg className='ontario-loading-indicator__spinner' viewBox="25 25 50 50" xmlns='http://www.w3.org/2000/svg'>
          <circle cx="50" cy="50" r="20" fill="none" stroke-width="4" />
        </svg>
        <p>Loading</p>
      </div>
    </div>
  );
};

export default Loading;