import React from "react";
import { tv } from "tailwind-variants";

const ButtonVariants = tv({
  base: "w-full border rounded-xl text-white bg-blue-700 font-poppins text-base focus:outline-none focus:ring-2 focus:ring-blue-500",
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

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  size?: "regular" | "big";
  title: string;
  icon?: React.ReactNode;
}

export const Button = ({
  size,
  title,
  icon,
  ...props
}: ButtonProps) => {
  const variantClasses = ButtonVariants({ size });

  return (
    <div className="w-full flex items-center justify-center">
      <div>{icon}</div>
      <button {...props} className={`${variantClasses}`}>
        {title}
      </button>
    </div>
  );
};
