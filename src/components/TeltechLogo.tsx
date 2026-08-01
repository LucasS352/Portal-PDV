import React from "react";

/**
 * Teltech logo – stylized "T" mark.
 * High-precision vector traced from the official Teltech brand logo.
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
      viewBox="0 0 500 500"
      width={size}
      height={size}
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Teltech Logo"
    >
      {/* Top bar */}
      <path d="M 140 120 H 360 L 315 170 H 205 Z" />
      {/* Middle swoosh */}
      <path d="M 185 225 L 250 170 H 335 L 210 275 Z" />
      {/* Bottom sweeping tail */}
      <path d="M 285 170 Q 240 230 195 390 Q 215 310 305 215 L 240 270 Z" />
    </svg>
  );
}
