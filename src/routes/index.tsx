import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { SignUpPage } from "../pages/SignUp";
import { HomePage } from "../pages/Home";
import { PublicPage } from "../pages/PublicPage";
import { BookPage } from "../pages/Book";
import { LibraryPage } from "../pages/Library";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<PublicPage />}>
        <Route element={<HomePage />} path="home" />
        <Route element={<HomePage />} path="*" />
        <Route element={<HomePage />} path="/" />
        <Route element={<BookPage />} path="/biblioteca/livro" />
        <Route element={<LibraryPage />} path="/biblioteca" />
      </Route>
      <Route element={<SignUpPage />} path="cadastrar" />
      <Route element={<LoginPage />} path="entrar" />
    </Route>
  )
);
