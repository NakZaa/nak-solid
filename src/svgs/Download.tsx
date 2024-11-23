import { JSX } from "solid-js";

export default function Download(
  props: JSX.IntrinsicAttributes & JSX.SvgSVGAttributes<SVGSVGElement>
) {
  return (
    <svg
      fill="none"
      stroke-width="2"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      style="overflow: visible; color: currentcolor;"
      {...props}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <path d="M7 10 12 15 17 10"></path>
      <path d="M12 15 12 3"></path>
    </svg>
  );
}
