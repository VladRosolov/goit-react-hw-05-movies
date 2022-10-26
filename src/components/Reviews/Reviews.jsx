import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/Apiservice';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchReviews(movieId).then(res => setMovie(res.results));
  }, [movieId]);

  // console.log(movie);

  if (!movie) {
    return null;
  }

  if (movie.length > 0) {
    return (
      <div>
        <ul className={css.reviewsList}>
          {movie.map(item => {
            return (
              <li key={item.id}>
                <h4>Author: {item.author}</h4>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <p>We don't have any reviews for this movie</p>;
  }
};
export default Reviews;
