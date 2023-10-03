import { RouterProvider } from "react-router-dom";
import routers from "./routers/routers";

export default function App() {
  const router = routers();
  return <RouterProvider router={router} />;
}
