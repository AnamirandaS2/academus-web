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
import ProviderPage from "../pages/ProviderPage";
import { CollectionPage } from "../pages/Collection";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<ProviderPage />}>
      <Route element={<ProtectedPage />}>
        <Route element={<HomePage />} path="home" />
        <Route element={<HomePage />} path="*" />
        <Route element={<HomePage />} path="/" />

        <Route path="biblioteca">
          <Route index element={<LibraryPage />} />
          <Route path="colecao" element={<CollectionPage />} />
          <Route path="colecao/livro" element={<BookPage />} />
        </Route>
      </Route>
      <Route element={<PublicPage />}>
        <Route element={<SignUpPage />} path="cadastrar" />
        <Route element={<LoginPage />} path="entrar" />
      </Route>
    </Route>
  )
);
