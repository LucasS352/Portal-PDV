import React from "react";

/**
 * Official Teltech brand mark logo.
 * Traced with precision to match the brand mark proportions at any scale.
 */
export function TeltechLogo({
  className = "",
  size = 20,
  color = "currentColor",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Teltech Logo"
    >
      <g>
        {/* Top horizontal bar */}
        <polygon points="12,14 88,14 74,31 30,31" />
        {/* Middle sloped bar */}
        <polygon points="26,39 44,31 72,31 37,55" />
        {/* Main sweeping curved 7 tail */}
        <path d="M 47 31 C 39 50 34 72 38 95 C 41 81 51 66 69 58 L 54 68 C 61 61 67 53 68 46 Z" />
      </g>
    </svg>
  );
}
