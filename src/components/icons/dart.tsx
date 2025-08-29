import type { SVGProps } from "react";

export default function Dart(props: SVGProps<SVGSVGElement>) {
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
        d="M7.5 0L0 7.5L7.5 15h7.5V0H7.5zM6 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
