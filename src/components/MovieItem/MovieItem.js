import { NavLink, useLocation } from 'react-router-dom';
import {
  MoviesImg,
  MoviesListItemStyle,
  MoviesTitle,
} from './MoviesItemStyled';
import styled from 'styled-components';

const Link = styled(NavLink)`
  text-decoration: none;
`;
export const MovieItem = ({
  movie: { id, title, original_title, poster_path },
}) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const location = useLocation();
  return (
    <MoviesListItemStyle>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <MoviesImg
          src={poster_path ? imgUrl.concat(poster_path) : defaultImg}
          alt={original_title ?? title}
          loading="lazy"
          width="200"
        />
        <MoviesTitle>{title ?? original_title}</MoviesTitle>
      </Link>
    </MoviesListItemStyle>
  );
};
