import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/auth.hook";

export default function PublicPage() {
  const outlet = useOutlet();
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to={"/home"} />;
  }

  return <div>{outlet}</div>;
}
