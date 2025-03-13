import {  LucideProps } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type NavButtonProps = {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  to: string;
  title: string;
};

export default function NavButton({ Icon, to, title }: NavButtonProps) {
  const location = useLocation();
  const isActive = location.pathname === `/${to}`;

  return (
    <Link to={`/${to}`}>
      <div
        className={`flex w-full gap-1 items-center justify-center ${
          isActive ? "text-blue-700 font-bold" : "text-black"
        }`}
      >
        <div
          className={`flex items-center justify-center rounded-full w-5 h-5 ${
            isActive ? "bg-blue-700" : "bg-white border-black border"
          }`}
        >
          <Icon
            color={isActive ? "#fff" : "#000"}
            size={12}
          />
        </div>
        <span>{title}</span>
      </div>
    </Link>
  );
}
