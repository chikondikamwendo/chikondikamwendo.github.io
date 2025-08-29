import type { SVGProps } from "react";

export default function Tailwind(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 3C5.567 3 4.5 4.12 4.5 5.5c0 .9.6 1.7 1.5 2c.6.2 1.3 0 1.7-.5c-.1.6-.6 1.2-1.2 1.5c-.6.3-1.3.3-1.9.1c-.3-.1-.7-.3-1-.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.9-.6-1.7-1.5-2c-.6-.2-1.3 0-1.7.5c.1-.6.6-1.2 1.2-1.5c.6-.3 1.3-.3 1.9-.1c.3.1.7.3 1 .5c0-1.4-1.1-2.5-2.5-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
