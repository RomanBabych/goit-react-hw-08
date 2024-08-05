import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div className={css.userMenu}>
      <p className={css.userName}>
        <span className={css.welcome}>Welcome,</span> {user.name}
      </p>
      <button className={css.button} onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}
