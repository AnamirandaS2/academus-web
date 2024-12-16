import { Search } from "lucide-react";
import { forwardRef, InputHTMLAttributes } from "react";

interface InputSearchBarProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputSearchBar = forwardRef<HTMLInputElement, InputSearchBarProps>(
  ({ ...props }, ref) => {
    return (
      <div className="w-full h-10 px-5 gap-2 border-2  border-blue-700 rounded-xl text-black font-poppins text-base placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-start cursor-text">
        <Search color="#02066F" />
        <input
          ref={ref}
          {...props}
          type="text"
          className="w-full bg-white border-none outline-none"
        />
      </div>
    );
  }
);

export default InputSearchBar;
