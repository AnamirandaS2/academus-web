import { useOutlet } from "react-router-dom";
import { AuthProvider } from "../contexts/auth.context";

export default function ProviderPage() {
  const outlet = useOutlet();

  return (
    <>
      <AuthProvider>
        {outlet}
      </AuthProvider>
    </>
  );
}
