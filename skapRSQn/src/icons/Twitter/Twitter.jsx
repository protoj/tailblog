/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Twitter = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2941 5.37507C18.4055 5.24521 18.2603 5.07552 18.0955 5.1363C17.7276 5.27197 17.3915 5.36147 16.8943 5.41671C17.5058 5.07621 17.7902 4.58953 18.0215 3.99345C18.0773 3.84967 17.909 3.71921 17.7641 3.78789C17.1755 4.06697 16.5405 4.27402 15.8726 4.39635C15.2125 3.74216 14.2716 3.33337 13.2308 3.33337C11.2321 3.33337 9.61137 4.84068 9.61137 6.69935C9.61137 6.96322 9.64371 7.22024 9.70471 7.46633C6.83167 7.33247 4.2698 6.10345 2.48994 4.21888C2.36795 4.08972 2.14659 4.10687 2.07063 4.2644C1.868 4.6847 1.75503 5.15095 1.75503 5.64184C1.75503 6.80941 2.3938 7.83957 3.36482 8.44321C2.92944 8.43012 2.51308 8.34529 2.12938 8.20132C1.94256 8.13124 1.72841 8.25441 1.75351 8.44279C1.9462 9.88937 3.11738 11.0828 4.62912 11.3648C4.32553 11.442 4.00578 11.483 3.67501 11.483C3.59481 11.483 3.5153 11.4805 3.43652 11.4757C3.23604 11.4633 3.07311 11.6426 3.15906 11.8142C3.72615 12.946 4.95066 13.7362 6.37562 13.7608C5.13704 14.6638 3.57651 15.2018 1.88073 15.2018C1.67163 15.2018 1.58193 15.4706 1.76743 15.5618C3.20013 16.266 4.83167 16.6667 6.56527 16.6667C13.2227 16.6667 16.8627 11.5378 16.8627 7.08967C16.8627 6.94407 16.859 6.79847 16.8525 6.65423C17.3928 6.29121 17.8785 5.85953 18.2941 5.37507Z"
        fill={color}
      />
    </svg>
  );
};