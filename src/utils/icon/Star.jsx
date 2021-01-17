import React from 'react';

const Star = ({fill}) =>
  <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M12 1C15.0892 10.4987 13.0394 8.99738 23 8.99738C14.916 14.8583 15.6955 12.4331 18.8136 21.9318C10.7297 16.042 13.2703 16.042 5.21522 21.9318C8.30446 12.4331 9.08399 14.8583 1 8.99738C10.9029 8.99738 8.9685 10.3832 12 1Z"
          fill={fill || "white"} stroke="#A4A8BB" stroke-width="0.5"/>
  </svg>

export default Star;
