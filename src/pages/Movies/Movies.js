import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'api';
import toast from 'react-hot-toast';
import { ErrorMessage } from 'components/ErrorMessage';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Searhbar } from 'components/SearchBar/SearchBar';

export default function Movies() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [moviesItems, setMoviesItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    async function searchMoviesList() {
      if (query.trim() === '') {
        return;
      }
      try {
        setLoading(true);
        setError(false);

        const { results } = await searchMovies(query);
        setMoviesItems(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    searchMoviesList();
  }, [searchParams]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const nextParams =
      query !== ''
        ? { query }
        : toast.error('Please fill out the search field');
    setSearchParams(nextParams);
  };
  const changeQuery = evt => {
    setQuery(evt.target.value);
  };

  return (
    <main>
      <Searhbar onSubmit={handleSubmit} onChange={changeQuery} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {moviesItems.length > 0 && <MoviesList movies={moviesItems} />}
    </main>
  );
}
