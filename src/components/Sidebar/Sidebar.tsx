import { Avatar } from "../Avatar/Avatar";
import { BookOpen, House, Play } from "lucide-react";
import NavButton from "../NavButton/NavButton";

type User = {
  name: string;
  role: string;
  avatarUrl: string;
  totalPageReads: number;
};

const useUser = (): User => {
  return {
    name: "Ana Clara Pontes",
    role: "Graduanda em Ciência da computação",
    avatarUrl: "https://avatars.githubusercontent.com/u/128877022?v=4",
    totalPageReads: 734,
  };
};

export default function Sidebar() {
  const { name, role, avatarUrl, totalPageReads } = useUser();
  return (
    <aside className="flex flex-col w-[20%] h-full px-10 items-center justify-start gap-2">
      <Avatar size="lg" src={avatarUrl} />
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col gap-10 items-center justify-normal text-center">
          <div className="flex flex-col items-center justify-center gap-1">
            <h2>{name}</h2>
            <p>{role}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="flex flex-col items-center justify-center gap-1">
              <h3>Paginômetro</h3>
              <div className="w-36 py-1 text-xl font-bold rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 text-[#fff]">
                {totalPageReads}
              </div>
            </div>

            <div className="flex flex-col w-full gap-2 items-start justify-start">
              <NavButton Icon={House} to="home" title="Página Inicial" />
              <NavButton Icon={BookOpen} to="biblioteca" title="Biblioteca" />
              <NavButton Icon={Play} to="lendo" title="Lendo" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
