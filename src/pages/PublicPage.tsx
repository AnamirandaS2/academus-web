import { useOutlet } from "react-router-dom";
import Header from "../components/Header/Header";

export const PublicPage = () => {
  const outlet = useOutlet();

  return (
    <main className="w-full h-screen overflow-hidden">
      <Header />
      {outlet}
    </main>
  );
};
