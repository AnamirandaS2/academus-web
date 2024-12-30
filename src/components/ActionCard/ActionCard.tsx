import { PlusCircle } from "lucide-react";
import { forwardRef } from "react";

export type ActionCardProps = {
  title: string;
} & React.AllHTMLAttributes<HTMLDivElement>;

export const ActionCard = forwardRef<HTMLDivElement, ActionCardProps>(
  ({ title, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className="max-w-[160px] w-full max-h-[220px] h-full hover:scale-95 hover:ease-in-out hover:duration-300 cursor-pointer border-2 rounded-md border-dashed border-blue-700 flex items-center justify-center"
      >
        <div className="flex flex-col w-full h-full items-center justify-center gap-1">
          <PlusCircle color="#02066f" />
          <p className="font-semibold text-sm text-blue-700 w-[70%]">{title}</p>
        </div>
      </div>
    );
  }
);
