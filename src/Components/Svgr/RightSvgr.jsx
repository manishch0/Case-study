import * as React from "react";

const RightSvgr = (props) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M32 2.75A29.25 29.25 0 1 0 61.25 32 29.28 29.28 0 0 0 32 2.75Zm0 56A26.75 26.75 0 1 1 58.75 32 26.78 26.78 0 0 1 32 58.75Z"
      fill="#000"
    />
    <path
      d="M49.8 17.86a4.26 4.26 0 0 0-6 .45L29.3 35.13a1.76 1.76 0 0 1-2.6.07l-6.65-7a4.25 4.25 0 1 0-6.15 5.86l11.22 11.79a4.271 4.271 0 0 0 3.08 1.32h.1a4.241 4.241 0 0 0 3.11-1.48l18.83-21.83a4.26 4.26 0 0 0-.44-6Z"
      fill="#000"
    />
  </svg>
);

export default RightSvgr;
