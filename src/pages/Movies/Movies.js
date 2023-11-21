import { searchMovies } from 'api';
import { ErrorMessage } from 'components/ErrorMessage';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Searhbar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';

export default function Movies() {
  const [moviesItems, setMoviesItems] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function searchMoviesList() {
      if (query === '') {
        return;
      }
      try {
        setLoading(true);
        setError(false);

        const { results } = await searchMovies(query, page);
        setMoviesItems(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    searchMoviesList();
  }, [query, page]);

  const onSubmit = query => {
    setQuery(query);
    setPage(1);
    setMoviesItems([]);
  };

  return (
    <main>
      <Searhbar onSubmit={onSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {moviesItems.length > 0 && <MoviesList movies={moviesItems} />}
    </main>
  );
}
