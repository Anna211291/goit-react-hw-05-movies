import { getMovieCast } from 'api';
import { ErrorMessage } from 'components/ErrorMessage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastImg, MovieCastStyle } from './CastStyled';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getCast() {
      try {
        const data = await getMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(true);
      }
    }
    getCast();
  }, [movieId]);

  const imgUrl = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <MovieCastStyle>
      {error && <ErrorMessage />}
      {cast.length === 0 && <div>'We're sorry, but there are no results.'</div>}
      {cast.map(actor => (
        <li key={actor.id}>
          <CastImg
            src={
              actor.profile_path
                ? imgUrl.concat(actor.profile_path)
                : defaultImg
            }
            alt={actor.name}
            loading="lazy"
            width="150"
          />
          <p>{actor.name}</p>
        </li>
      ))}
    </MovieCastStyle>
  );
}
