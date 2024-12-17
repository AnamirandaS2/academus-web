import React from "react";
import * as Progress from "@radix-ui/react-progress";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <Progress.Root
      className="relative h-2 w-full overflow-hidden rounded-full "
      style={{ backgroundColor: "rgba(69, 66, 87, 0.123)" }}
      value={percentage}
    >
      <Progress.Indicator
        className="h-full bg-blue-500 transition-transform rounded-full duration-300"
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </Progress.Root>
  );
};

export default ProgressBar;
