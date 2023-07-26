import React, { useState, useEffect } from 'react';
import { getMovies } from '../components/services/fetchMovies';
import Trending from 'components/Trending/Trending';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const data = await getMovies();
      setMovies(data.results);
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        <Trending movies={movies} />
      </ul>
    </div>
  );
}

export default Home;
