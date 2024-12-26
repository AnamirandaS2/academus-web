import { SignUpContainer } from "./SignUpContainer";
import { useAuth } from "../../hooks/auth.hook";

export function SignUpPage() {
  const { onRegister } = useAuth();

  return <SignUpContainer onSubmit={onRegister} />;
}
