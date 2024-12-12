import React, { forwardRef } from "react";
import { tv } from "tailwind-variants";

const InputVariants = tv({
  base: "w-full border rounded-xl text-black font-poppins text-base placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500",
  variants: {
    borderColor: {
      gray: " border-gray-200",
      blue: " border-blue-900",
    },
    size: {
      regular: "h-12 px-4",
      big: "h-12 px-8",
    },
    icon: {
      iconLeft: "",
    },
  },
  defaultVariants: {
    size: "regular",
    borderColor: "gray",
  },
});

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "regular" | "big";
  borderColor: "gray" | "blue";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size, borderColor, ...props }, ref) => {
    const variantClasses = InputVariants({ size, borderColor });

    return (
      <div className="w-full flex items-center justify-center">
        <div></div>
        <input required ref={ref} {...props} className={`${variantClasses}`} />
      </div>
    );
  }
);
