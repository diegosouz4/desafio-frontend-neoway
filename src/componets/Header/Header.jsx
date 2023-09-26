import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";

export default function Header() {
  return (
    <header className={style.header}>
      <div className="container">
        <nav className={style.nav}>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? style.active : ""
            }
            to="/"
          >
            home
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? style.active : ""
            }
            to="/favoritos"
          >
            favoritos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
