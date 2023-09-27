import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../views/HomePage/HomePage";
import FavoritesPage from "../views/FavoritesPage/FavoritesPage";
import SinglePost from "../views/SinglePost/SinglePost";

export default function routers() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/favoritos",
          element: <FavoritesPage />,
        },
        {
          path: "/noticia/:title",
          element: <SinglePost />,
        },
      ],
    },
  ]);

  return routes;
}
