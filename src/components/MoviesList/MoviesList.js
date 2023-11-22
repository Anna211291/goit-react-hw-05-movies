import { MovieItem } from '../MovieItem/MovieItem';
import { MoviesListStyle, Title } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <MoviesListStyle>
      {movies.map(movie => (
        <li key={movie.id}>
          <MovieItem movie={movie} />
        </li>
      ))}
    </MoviesListStyle>
  );
};
