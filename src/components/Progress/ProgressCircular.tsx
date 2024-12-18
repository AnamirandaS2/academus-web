import React from "react";

type ProgressCircularProps = {
  percentage: number;
} & React.HTMLProps<HTMLDivElement>;

export function ProgressCircular({
  percentage,
  style,
  ...props
}: ProgressCircularProps) {
  const size = 100;
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center w-full h-full"
      style={{ ...style }}
      {...props}
    >
      <svg
        className="transform -rotate-90"
        width="80%"
        height="80%"
        viewBox="0 0 120 120"
      >
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#2201B2" />
            <stop offset="100%" stopColor="#040136" />
          </linearGradient>
        </defs>
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="transparent"
          stroke="#ddd6fe"
          strokeWidth="8"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="transparent"
          stroke="url(#progressGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div
        className="absolute font-bold"
        style={{
          fontSize: `${size / 3}px`,
          color: "#2201B2",
        }}
      >
        {percentage}%
      </div>
    </div>
  );
}
