import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { SignUpPage } from "../pages/SignUp";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<SignUpPage />} path="cadastrar" />
      <Route element={<LoginPage />} path="entrar" />
    </Routes>
  );
}
