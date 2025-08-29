import type { SVGProps } from "react";

export default function React(props: SVGProps<SVGSVGElement>) {
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
        d="M7.5 1.5a6 6 0 1 0 0 12a6 6 0 0 0 0-12M.5 7.5a7 7 0 1 1 14 0a7 7 0 0 1-14 0m7 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-1a2 2 0 1 1 0-4a2 2 0 0 1 0 4"
        clipRule="evenodd"
      />
    </svg>
  );
}
