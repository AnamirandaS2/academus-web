import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { SignUpPage } from "../pages/SignUp";
import { HomePage } from "../pages/Home";
import { ProtectedPage } from "../pages/ProtectedPage";
import { BookPage } from "../pages/Book";
import { LibraryPage } from "../pages/Library";
import PublicPage from "../pages/PublicPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<ProtectedPage />}>
        <Route element={<HomePage />} path="home" />
        <Route element={<HomePage />} path="*" />
        <Route element={<HomePage />} path="/" />
        <Route element={<BookPage />} path="/biblioteca/livro" />
        <Route element={<LibraryPage />} path="/biblioteca" />
      </Route>
      <Route element={<PublicPage/>}>
        <Route element={<SignUpPage />} path="cadastrar" />
        <Route element={<LoginPage />} path="entrar" />
      </Route>
    </Route>
  )
);
