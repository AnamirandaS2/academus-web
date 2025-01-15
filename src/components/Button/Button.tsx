import React, { Children, forwardRef } from "react";
import { tv } from "tailwind-variants";

const ButtonVariants = tv({
  base: "w-full flex items-center justify-center border rounded-xl text-white bg-blue-700 font-poppins text-base focus:outline-none focus:ring-2 focus:ring-blue-500 hover:scale-105 hover:transition duration-300 ease-in-out",
  variants: {
    borderColor: {
      gray: " border-gray-200",
      blue: " border-blue-900",
    },
    size: {
      small: "h-8 px-4",
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

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  size?: "regular" | "big" | "small";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, children, className, ...props }, ref) => {
    const variantClasses = ButtonVariants({ size });

    return (
      <button {...props} ref={ref} className={`${variantClasses} ${className}`}>
        {children}
      </button>
    );
  }
);
