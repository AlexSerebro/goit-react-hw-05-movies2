import { useState, useEffect } from 'react';

import { fetchTrendingMovies } from '../services/api';
import MoviesList from '../components/MoviesList/MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies(1)
      .then(r => setMovies(r))
      .catch(r => console.log(r));
  }, []);

  return <MoviesList movies={movies} />;
}
