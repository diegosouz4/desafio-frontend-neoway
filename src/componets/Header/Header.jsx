import { Link, NavLink } from "react-router-dom";
import { FaRegHandSpock } from "react-icons/fa6";
import style from "./Header.module.scss";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={`container ${style.container}`}>
        <Link to="/" className={style.logo}>
          <FaRegHandSpock />
        </Link>

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
