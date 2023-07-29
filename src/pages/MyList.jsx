import { useState, useEffect } from 'react';
import { getMovieDetails } from '../services/fetchMovies';
import styles from '../components/styled/myList.module.scss';
import NotFound from '../components/NotFound/NotFound';
import WatchingList from '../components/WatchingList/WatchingList';
import Loader from 'components/Loader/Loader';

const MyList = () => {
  const [watchingList, setWatchingList] = useState([]);
  const [watchingListUpdated, setWatchingListUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const myList = localStorage.getItem('watchingList');
    const myListIds = myList ? JSON.parse(myList) : [];

    const fetchWatchingList = async () => {
      try {
        setIsLoading(true);
        const movies = await Promise.all(
          myListIds.map(id => getMovieDetails(id))
        );
        setWatchingList(movies);
        setIsLoading(false);
      } catch (error) {
        console.log('Помилка при отриманні улюблених фільмів:', error);
      }
    };
    fetchWatchingList();
  }, [watchingListUpdated]);

  const onDeleteClick = id => {
    const myList = localStorage.getItem('watchingList');
    const myListIds = myList ? JSON.parse(myList) : [];
    const updatedList = myListIds.filter(movieId => movieId !== parseInt(id));
    setWatchingList(updatedList);
    localStorage.setItem('watchingList', JSON.stringify(updatedList));
    console.log(id);

    setWatchingListUpdated(!watchingListUpdated);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <h1 className={styles.title}>Watching list</h1>
          {watchingList.length === 0 ? (
            <NotFound text="Firstly add movies to your watching list" />
          ) : (
            <WatchingList movies={watchingList} onDeleteClick={onDeleteClick} />
          )}
        </div>
      )}
    </>
  );
};

export default MyList;
