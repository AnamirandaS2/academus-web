import { Bell, LibraryBig, SettingsIcon } from "lucide-react";
import logo from "../../assets/logo (1).svg";
import InputSerchBar from "../Input/InputSearchBar";
import { Avatar } from "../Avatar/Avatar";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-10 bg-[#fff]">
      <img src={logo} alt="" className="" />
      <div className="w-[40%]">
        <InputSerchBar placeholder="Pesquise por autores, livros, artigos..." />
      </div>
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-start justify-between gap-2">
          <button className="hover:scale-105 hover:transition duration-300 ease-in-out">
            <Bell color="#02066F" />{" "}
          </button>
          <button className="hover:scale-105 hover:transition duration-300 ease-in-out">
            <SettingsIcon color="#02066F" />{" "}
          </button>
          <button className="hover:scale-105 hover:transition duration-300 ease-in-out">
            <LibraryBig color="#02066F" />{" "}
          </button>
        </div>
        <div>
          <Avatar
            size="sm"
            src="https://avatars.githubusercontent.com/u/128877022?v=4"
          />
        </div>
      </div>
    </header>
  );
}
