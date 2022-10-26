import React, { useState, useEffect, Suspense } from 'react';
import css from './Home.module.css';
// import PropTypes from 'prop-types';
// import MovieDetails from 'components/MovieDetails/MovieDetails';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { fetchTrandingMovies } from 'services/Apiservice';
import { BeatLoader } from 'react-spinners/BarLoader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrandingMovies().then(res => setMovies(res.results));
  }, []);
  // console.log(movies);

  return (
    <div className={css.home}>
      <h1 className={css.home_title}>Tranding today</h1>

      <ul className={css.movieList}>
        {movies.map(movie => {
          const { id, title, name, poster_path, backdrop_path } = movie;
          return (
            <li key={id} className={css.movieList__item}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                <img
                  src={
                    `https://www.themoviedb.org/t/p/w500${poster_path}` ||
                    `https://www.themoviedb.org/t/p/w500${backdrop_path}`
                  }
                  alt=""
                  width="100%"
                />
                <br />
                <p className={css.movieList__title}>{title || name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <Suspense fallback={BeatLoader}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Home;
