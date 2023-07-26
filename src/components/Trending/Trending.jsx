import { useEffect, useState, useMemo } from 'react';
import { getMovies } from '../../services/fetchMovies';
import styles from './trending.module.scss';
import Slider from '../Slider/Slider';
import { addToFavorites, addToWatchingList } from '../../services/buttonsLogic';

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [tvPopular, setTvPopular] = useState([]);

  // const movieRequests = [
  //   { path: '/trending/all/day', setter: setMovies },
  //   { path: '/movie/top_rated', setter: setTopRated },
  //   { path: '/movie/now_playing', setter: setNowPlaying },
  //   { path: '/movie/upcoming', setter: setUpcoming },
  //   { path: '/tv/top_rated', setter: setTvPopular },
  // ];

  const movieRequests = useMemo(
    () => [
      { path: '/trending/all/day', setter: setMovies },
      { path: '/movie/top_rated', setter: setTopRated },
      { path: '/movie/now_playing', setter: setNowPlaying },
      { path: '/movie/upcoming', setter: setUpcoming },
      { path: '/tv/top_rated', setter: setTvPopular },
    ],
    []
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const requests = movieRequests.map(async request => {
          const data = await getMovies(request.path);
          request.setter(data.results);
        });

        await Promise.all(requests);
      } catch (error) {
        console.log('Виникла помилка при отриманні даних:', error);
        throw error;
      }
    }

    fetchData();
  }, [movieRequests]);

  return (
    <div className={styles.box}>
      <Slider
        movies={movies}
        title="New & Popular"
        addToFavorites={addToFavorites}
        addToWatchingList={addToWatchingList}
      />
      <Slider
        movies={nowPlaying}
        title="Today in cinema"
        addToFavorites={addToFavorites}
        addToWatchingList={addToWatchingList}
      />
      <Slider
        movies={upcoming}
        title="Upcoming"
        addToFavorites={addToFavorites}
        addToWatchingList={addToWatchingList}
      />
      <Slider
        movies={tvPopular}
        title="Top rated series"
        addToFavorites={addToFavorites}
        addToWatchingList={addToWatchingList}
      />
      <Slider
        movies={topRated}
        title="Top rated movies"
        addToFavorites={addToFavorites}
        addToWatchingList={addToWatchingList}
      />
    </div>
  );
};

export default Trending;
