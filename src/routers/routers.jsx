import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../views/HomePage";
import FavoritesPage from "../views/FavoritesPage";

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
      ],
    },
  ]);

  return routes;
}
