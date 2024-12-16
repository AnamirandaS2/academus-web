import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { SignUpPage } from "../pages/SignUp";
import { HomePage } from "../pages/Home";
import { PublicPage } from "../pages/PublicPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<PublicPage />}>
        <Route element={<HomePage />} path="home" />
        <Route element={<HomePage />} path="*" />
        <Route element={<HomePage />} path="/" />
      </Route>
      <Route element={<SignUpPage />} path="cadastrar" />
      <Route element={<LoginPage />} path="entrar" />
    </Route>
  )
);
