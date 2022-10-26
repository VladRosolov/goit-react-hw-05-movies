import { Link } from 'react-router-dom';
import css from './AppBar.module.css';

export default function AppBar() {
  return (
    <div as="header" className={css.header}>
      <Link to="/" className={css.link}>
        Home
      </Link>
      <Link to="/movies" className={css.link}>
        Movies
      </Link>
    </div>
  );
}
