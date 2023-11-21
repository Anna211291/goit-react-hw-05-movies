import { getMovieReviews } from 'api';
import { ErrorMessage } from 'components/ErrorMessage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieReviewsStyle } from './Reviews.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getReviews() {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(true);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <MovieReviewsStyle>
      {error && <ErrorMessage />}
      {reviews.length === 0 && (
        <div>'We're sorry, but there are no reviews.'</div>
      )}
      {reviews.map(review => (
        <li key={review.id}>
          <h2>{review.author}</h2>
          <p>{review.content}</p>
        </li>
      ))}
    </MovieReviewsStyle>
  );
}
