import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { SignUpPage } from "../pages/SignUp";
import { HomePage } from "../pages/Home";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<SignUpPage />} path="cadastrar" />
      <Route element={<LoginPage />} path="entrar" />
      <Route element={<HomePage />} path="home" />
    </Routes>
  );
}
