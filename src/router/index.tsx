import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import AuthorDetails from "../pages/author-details";
import Home from "../pages/home";
import BookDetails from "../pages/book-details";
import Account from "../pages/account";
import SignIn from "../pages/auth/sign-in";
import SignUP from "../pages/auth/sign-up";
import GenericComp from "../components/generic";
import Authors from "../pages/authors";
import Books from "../pages/books";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/author-details/:id",
        element: <AuthorDetails />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/account/:id",
        element: <Account />,
      },
      {
        path: "/authors",
        element: <Authors />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/maqolalar",
        element: <GenericComp />,
      },
      
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUP />,
  },
]);

export default router;
