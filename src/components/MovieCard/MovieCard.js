import {
  MovieCardStyle,
  MovieCardTextList,
  MovieCardTextStyle,
} from './MovieCard.styled';

export const MovieCard = ({
  movie: { overview, poster_path, release_date, title, vote_average },
}) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <MovieCardStyle>
      <img
        src={poster_path ? imgUrl.concat(poster_path) : defaultImg}
        alt={title}
        loading="lazy"
        width="300"
      />
      <MovieCardTextStyle>
        <h1>{title}</h1>
        <MovieCardTextList>
          <li>
            <span>Overview:</span> {overview}
          </li>
          <li>
            <span>Release date:</span> {release_date}
          </li>
          <li>
            <span>Vote average:</span> {vote_average}
          </li>
        </MovieCardTextList>
      </MovieCardTextStyle>
    </MovieCardStyle>
  );
};
