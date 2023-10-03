import { RouterProvider } from "react-router-dom";
import routers from "./routers/routers";
import React from "react";
import { useDispatch } from "react-redux";
import { addLikesItem } from "./redux/noticias/noticias";

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(addLikesItem());
  }, [])

  const router = routers();
  return <RouterProvider router={router} />;
}
