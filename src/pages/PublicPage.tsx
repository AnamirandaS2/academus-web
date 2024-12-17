import { useOutlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

export const PublicPage = () => {
  const outlet = useOutlet();

  return (
    <main className="w-full h-screen overflow-hidden bg-white flex flex-col">
      <Header />
      <div className="w-full h-full flex">
        <Sidebar />
        {outlet}
      </div>
    </main>
  );
};
