import { useRef, useEffect } from "react";

type SkeletonProps = {
  className?: string;
};

export default function Skeleton({ className = "" }: SkeletonProps) {
  const skeletonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skeletonRef.current) {
      skeletonRef.current.className = `animate-pulse bg-gray-200 ${className}`;
    }
  }, [className]);

  return <div ref={skeletonRef}></div>;
}
