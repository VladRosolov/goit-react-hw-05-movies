import React, { useState, useEffect, Suspense } from 'react';
import css from './Movies.module.css';
import { Outlet, useLocation, Link, useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import { fetchQuery } from 'services/Apiservice';

const Movies = () => {
  const [, setValue] = useState('');
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const [seacrhParams, setSeacrhParams] = useSearchParams();
  const query = seacrhParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchQuery(query).then(res => setMovies(res.results));
  }, [query]);

  const handleFormSubmit = movie => {
    setSeacrhParams({ query: movie });
    setValue(movie);
  };

  // console.log(movies);

  return (
    <div className={css.movieListContainer}>
      {<SearchBar onSubmit={handleFormSubmit} />}
      {movies && (
        <ul className={css.movieList}>
          {movies.map(data => {
            return (
              <li key={data.id} className={css.movieList__item}>
                <Link to={`${data.id}`} state={{ from: location }}>
                  <img
                    src={
                      `https://www.themoviedb.org/t/p/w500${data.poster_path}` ||
                      `https://www.themoviedb.org/t/p/w500${data.backdrop_path}`
                    }
                    alt=""
                    width="100%"
                  />
                  <br />
                  <p className={css.movieList__title}>{data.original_title} </p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Movies;
