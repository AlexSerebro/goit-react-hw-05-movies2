import { NavLink } from 'react-router-dom';
import s from './CastReviewMenu.module.css';

export  function CastReviewMenu() {
  return (
    <div className={s.CastReviewMenu}>
      <h4 className={s.title}>Additional information</h4>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={s.link} to="cast">
            Cast
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
