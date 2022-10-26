import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCasts } from 'services/Apiservice';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchCasts(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }
  console.log(movie.cast);
  if (movie) {
    return (
      <div>
        <ul className={css.castList}>
          {movie.cast.map(item => {
            return (
              <li key={item.id} className={css.castItem}>
                <p>{item.name}</p>
                <img
                  src={
                    item.profile_path
                      ? `https://www.themoviedb.org/t/p/w500${item.profile_path}`
                      : 'Poster image'
                  }
                  alt=""
                  width="200px"
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Cast;
