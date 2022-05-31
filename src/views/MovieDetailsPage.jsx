import {  useParams, Route, Routes, useLocation, useNavigate,} from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';

import { fetchMovieById } from '../services/api';
import { useRef } from 'react';

import MovieCard from '../components/MovieCard/MovieCard';
import {CastReviewMenu} from '../components/CastReviewMenu';

const Cast = lazy(() =>
  import('../components/Cast/Cast' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('../components/Reviews/Reviews' /* webpackChunkName: "Reviews" */),
);

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const params = useParams();

  const location = useRef(useLocation()?.state?.from ?? '/');
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieById(params.movieId).then(r => setMovie(r));
  }, [params.movieId]);

  return (
    <>
      {movie && (
        <>
          <button className="btn" onClick={() => navigate(location.current)}>
            Go back
          </button>
          <MovieCard movie={movie} />
          <CastReviewMenu />
          <Suspense fallback={<p>Loading</p>}>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}
