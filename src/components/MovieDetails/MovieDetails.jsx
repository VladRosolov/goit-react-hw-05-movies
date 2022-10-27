import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { fetchMovieById } from 'services/Apiservice';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMovieById(movieId).then(setMovies);
  }, [movieId]);

  if (!movies) {
    return null;
  }
  console.log(location.state);
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <main>
        <button type="button">
          <Link to={backLinkHref} className={css.btn_link}>
            Go back
          </Link>
        </button>
        <div className={css.movieCard}>
          <div className={css.content_left}>
            <img
              src={`https://www.themoviedb.org/t/p/w500${movies.poster_path}`}
              alt={movies.original_title}
              width="300px"
            />
          </div>
          <div className={css.content_right}>
            <h1>{movies.title}</h1>
            <p>Genres: {movies.genres.map(({ name }) => name).join(', ')}</p>
            <p className={css.movies_text}>{movies.overview}</p>
            <ul className={css.movies_data}>
              <li>
                <p>Release date: {movies.release_date}</p>
              </li>
              <li>
                <a href={movies.homepage}>{movies.homepage}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.moreInfoTitle}>
          <h3 className={css.moreInfoItem}>Additional information</h3>
        </div>
        <div className={css.moreInfo}>
          <div className={css.moreInfoLeft}>
            <ul className={css.moreInfoList}>
              <li>
                <Link
                  to="cast"
                  state={{ from: backLinkHref }}
                  className={css.moreInfoLink}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  state={{ from: backLinkHref }}
                  className={css.moreInfoLink}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className={css.moreInfoRight}>
            <Link
              to={`/movies/${movieId}`}
              state={{ from: 'reviews' || 'cast' }}
              className={css.moreInfoLink}
            >
              Hide
            </Link>
          </div> */}
        </div>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default MovieDetails;
