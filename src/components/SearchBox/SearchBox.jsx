import { useDispatch, useSelector } from "react-redux";
import { useId } from "react";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectNameFilter);
  const searchInputId = useId();

  return (
    <div className={css.searchInputWrapper}>
      <label className={css.searchInputLabel} htmlFor={searchInputId}>
        Find contacts by name
      </label>
      <input
        id={searchInputId}
        className={css.searchInput}
        type="text"
        value={searchTerm}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
}
