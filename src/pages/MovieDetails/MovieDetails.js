import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieById } from 'api';
import { LinksStyle } from 'GlobalStyle';
import { ErrorMessage } from 'components/ErrorMessage';
import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import styled from 'styled-components';

const Links = styled(NavLink)`
  font-size: 30px;
  color: azure;
  text-decoration: none;
  &.active {
    color: blueviolet;
    font-weight: 700;
    text-decoration: underline;
  }
`;

export default function MovieDetails() {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    async function getMovieDetails() {
      try {
        setLoading(true);
        setError(false);

        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <main>
      <Link to={location.state?.from ?? '/movies'}>Back Link</Link>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movie && <MovieCard movie={movie} />}
      <LinksStyle>
        <li>
          <Links to="cast">Cast</Links>
        </li>
        <li>
          <Links to="reviews">Reviews</Links>
        </li>
      </LinksStyle>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}
