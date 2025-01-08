import * as React from 'react';
import { SVGProps } from 'react';
const Medium = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.769 5c3.739 0 6.768 3.005 6.768 6.712s-3.03 6.712-6.768 6.712S0 15.418 0 11.712 3.03 5 6.769 5Zm10.81.393c1.869 0 3.383 2.83 3.383 6.32 0 3.488-1.514 6.317-3.384 6.317-1.87 0-3.384-2.829-3.384-6.318 0-3.489 1.515-6.319 3.384-6.319Zm5.23.659c.657 0 1.191 2.534 1.191 5.66 0 3.127-.532 5.66-1.19 5.66-.659 0-1.19-2.535-1.19-5.66 0-3.126.532-5.66 1.19-5.66Z"
    />
  </svg>
);
export default Medium;
