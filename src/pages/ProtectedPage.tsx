import { Navigate, useOutlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { useAuth } from "../hooks/auth.hook";
import Skeleton from "../components/Skeleton/Skeleton";

export const ProtectedPage = () => {
  const outlet = useOutlet();

  const { isAuthenticated, isLoadingUser } = useAuth();
  if (isLoadingUser) {
    return (
      <div className="flex w-screen h-screen items-center justify-center">
        <Skeleton className="w-40 h-40" />
      </div>
    );
  }
  if (!isAuthenticated) {
    return <Navigate to={"/entrar"} />;
  }

  return (
    <main className="w-full min-h-screen overflow-hidden bg-[#fff] flex flex-col">
      <Header />
      <div className="w-full h-full flex">
        <Sidebar />
        {outlet}
      </div>
    </main>
  );
};
