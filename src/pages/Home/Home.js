import { useEffect, useState } from 'react';
import { getMovies } from 'api';
import { ErrorMessage } from 'components/ErrorMessage';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';


export default function Home() {
  const [moviesItems, setMoviesItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function trendingMovies() {
      try {
        setLoading(true);
        setError(false);

        const { results } = await getMovies();
        setMoviesItems(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    trendingMovies();
  }, []);
  return (
    <main>
      {loading && <Loader />}
      {error && (
        <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
      )}
      {moviesItems.length > 0 && <MoviesList movies={moviesItems} />}
    </main>
  );
}
