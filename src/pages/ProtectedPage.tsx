import { Navigate, redirect, useNavigate, useOutlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { useAuth } from "../hooks/auth.hook";

export const ProtectedPage = () => {
  const outlet = useOutlet();

  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to={"/entrar"} />;
  }

  return (
    <main className="w-full h-screen overflow-hidden bg-[#fff] flex flex-col">
      <Header />
      <div className="w-full h-full flex">
        <Sidebar />
        {outlet}
      </div>
    </main>
  );
};
