import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const makeNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AuthNav() {
  return (
    <div className={css.authNav}>
      <NavLink to="/register" className={makeNavLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={makeNavLinkClass}>
        Log in
      </NavLink>
    </div>
  );
}
