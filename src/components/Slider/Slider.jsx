import React, { useState } from 'react';
// import styles from '../Trending/trending.module.scss';
import { AiFillStar, AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import Buttons from '../Buttons/Buttons';
import styles from './slider.module.scss';

const MovieSlider = ({ movies, title, addToFavorites, addToWatchingList }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const moviesPerPage = 4;
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const startIndex = currentPage * moviesPerPage;
  const visibleMovies = movies.slice(startIndex, startIndex + moviesPerPage);
  // const [currentPage, setCurrentPage] = useState(0);
  // const [moviesPerPage, setMoviesPerPage] = useState(4);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   handleResize(); // Викликаємо при монтуванні компонента, щоб встановити початкове значення
  //   window.addEventListener('resize', handleResize); // Додаємо обробник події 'resize'

  //   return () => {
  //     window.removeEventListener('resize', handleResize); // Видаляємо обробник події 'resize' при демонтажі компонента
  //   };
  // }, []);

  // useEffect(() => {
  //   if (windowWidth < 768) {
  //     setMoviesPerPage(1);
  //   } else if (windowWidth < 1400) {
  //     setMoviesPerPage(2);
  //   } else {
  //     setMoviesPerPage(4);
  //   }
  // }, [windowWidth]);

  // const totalPages = Math.ceil(movies.length / moviesPerPage);

  // const handleNextPage = () => {
  //   setCurrentPage(prevPage => prevPage + 1);
  // };

  // const handlePreviousPage = () => {
  //   setCurrentPage(prevPage => prevPage - 1);
  // };

  // const startIndex = currentPage * moviesPerPage;
  // const visibleMovies = movies.slice(startIndex, startIndex + moviesPerPage);

  return (
    <div>
      <h2 className={styles.caption}>{title}</h2>
      <div className={styles.slider}>
        <div className={styles.paginator}>
          <button
            className={styles.slider_btn}
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
          >
            <AiOutlineLeft className={styles.slider_svg} />
          </button>
          <button
            className={styles.slider_btn}
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
          >
            <AiOutlineRight className={styles.slider_svg} />
          </button>
        </div>
        <div className={styles.movies}>
          {visibleMovies.map(
            ({
              name,
              title,
              id,
              backdrop_path,
              vote_average,
              release_date,
            }) => (
              <div className={styles.movies__item} key={id}>
                <div className={styles.movies__info}>
                  <img
                    className={styles.movies__img}
                    src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
                    alt={title}
                  />
                  <p className={styles.movies__name}>{title || name}</p>
                  <div className={styles.wrapper}>
                    <p className={styles.movies__date}>{release_date}</p>
                    <div className={styles.movies__rate}>
                      <AiFillStar className={styles.movies__svg} />
                      <p className={styles.movies__vote}>
                        {vote_average.toFixed(1)}
                      </p>
                    </div>
                  </div>
                  <Buttons
                    addToWatchingList={addToWatchingList}
                    addToFavorites={addToFavorites}
                    id={id}
                  />
                </div>

                <p className={styles.movies__name}>{title || name}</p>
                <img
                  className={styles.movies__img}
                  src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
                  alt={title}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieSlider;
