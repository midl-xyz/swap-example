import * as React from 'react';
import { SVGProps } from 'react';
const TelegramPlane = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill="#212122"
      d="M22.439 4.622 19.27 19.566c-.239 1.054-.862 1.317-1.748.82l-4.828-3.558-2.33 2.24c-.258.258-.473.474-.97.474l.347-4.917 8.948-8.086c.39-.347-.084-.539-.605-.192L7.022 13.312l-4.763-1.49c-1.036-.324-1.054-1.036.216-1.533l18.628-7.177c.863-.323 1.617.193 1.336 1.51Z"
    />
  </svg>
);
export default TelegramPlane;
