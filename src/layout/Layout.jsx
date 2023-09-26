import { Outlet } from "react-router-dom";
import Footer from "../componets/Footer/Footer";
import Header from "../componets/Header/Header";
import style from "./Layout.module.scss";

export default function Layout() {
  return (
    <div className={style.app}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
