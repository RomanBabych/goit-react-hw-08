import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from "./AppBar.module.css";
import clsx from "clsx";

const makeNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AppBar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={makeNavLinkClass}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={makeNavLinkClass}>
            Contacts
          </NavLink>
        )}
      </nav>
      <div className={css.userMenu}>
        {isLoggedIn ? (
          <>
            <span className={css.userName}>Welcome, {user.name}</span>
            <button
              className={css.logoutButton}
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={css.link}>
              Log in
            </NavLink>
            <NavLink to="/register" className={css.link}>
              Register
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
}
