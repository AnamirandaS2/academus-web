import { useAuth } from "../../hooks/auth.hook.tsx";
import { LoginContainer } from "./LoginContainer.tsx";

export function LoginPage() {
  const { onLogin } = useAuth();
  return (
    <div className="w-full h-full flex">
      <LoginContainer onSubmit={onLogin} />
    </div>
  );
}
