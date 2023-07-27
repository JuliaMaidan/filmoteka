import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getMoviesByGenre } from '../services/fetchMovies';
import PostersList from '../components/PostersList/PostersList';
import Paginator from '../components/Paginator/Paginator';
import styles from '../components/styled/moviesByGenre.module.scss';
import Loader from 'components/Loader/Loader';

const MoviesByGenre = () => {
  const { category } = useParams();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [prevCategory, setPrevCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPrevCategory(category);
  }, [category]);

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      try {
        setIsLoading(true);
        const moviesData = await getMoviesByGenre(category, currentPage);
        setMovies(moviesData.results);
        setTotalPages(moviesData.total_pages);
        setIsLoading(false);
      } catch (error) {
        console.log('Помилка при отриманні фільмів за жанром:', error);
      }
    };

    if (category !== prevCategory) {
      setCurrentPage(1);
    } else {
      fetchMoviesByGenre();
    }
  }, [category, currentPage, prevCategory]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  console.log(totalPages);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Genre: {category}</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <PostersList movies={movies} />
          <Paginator
            count={100}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default MoviesByGenre;
