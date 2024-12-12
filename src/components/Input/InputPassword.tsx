import { Eye, EyeClosed } from "lucide-react";
import { forwardRef, InputHTMLAttributes, useState } from "react";

interface InputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="relative w-full">
        <input
          required
          ref={ref}
          {...props}
          type={showPassword ? "text" : "password"}
          className="w-full h-12 px-4 border-gray-200 border rounded-xl text-black font-poppins text-base placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {showPassword ? (
          <Eye
            size={20}
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-[50%] translate-y-[-50%] stroke-[#707378] cursor-pointer"
          />
        ) : (
          <EyeClosed
            size={20}
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-[50%] translate-y-[-50%] stroke-[#707378] cursor-pointer"
          />
        )}
      </div>
    );
  }
);
