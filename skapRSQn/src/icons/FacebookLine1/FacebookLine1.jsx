/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const FacebookLine1 = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2 11.4478V8.10219C13.2 6.80705 14.2745 5.75713 15.6 5.75713H18V2.23955L14.742 2.01216C11.9634 1.81824 9.6 3.96848 9.6 6.69036V11.4478H6V14.9654H9.6V22H13.2V14.9654H16.8L18 11.4478H13.2Z"
        fill={color}
      />
    </svg>
  );
};
