import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieById } from 'components/services/fetchMovies';
import { useState, useEffect } from 'react';
import styles from './aboutMovie.module.scss';
import Spinner from 'components/Loader/Loader';
import { useLocation } from 'react-router';

const AboutMovie = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchMovies() {
      const data = await getMovieById(id);
      setMovies(data);
      setIsLoading(true);
    }
    fetchMovies();
  }, [id]);

  return (
    <div>
      <button className={styles.btn}>
        <Link className={styles.link} to={backLinkHref}>
          Back to movies
        </Link>
      </button>
      {!isLoading && <Spinner />}
      {isLoading && (
        <div>
          <div className={styles.wrapper}>
            <img
              className={styles.img}
              src={`https://image.tmdb.org/t/p/w780/${movies.backdrop_path}`}
              alt={movies.title}
              height="200"
            />
            <div className={styles.wrapper__name}>
              <h2 className={styles.title}>
                {movies.title ?? movies.name} ({movies.release_date})
              </h2>
              <p className={styles.score}>User score: {movies.vote_average}</p>
            </div>
          </div>
          <h3 className={styles.overview}>Overview</h3>
          <p className={styles.overview__desc}>{movies.overview}</p>
          <h4 className={styles.genres}>Genres</h4>
          <ul className={styles.genres__list}>
            {movies.genres.map(({ name }) => (
              <li className={styles.genres__item} key={name}>
                {name}
              </li>
            ))}
          </ul>
          <b className={styles.info}>Additional information</b>
          <ul className={styles.info__list}>
            <li>
              <Link className={styles.info__link} to={`/movies/${id}/cast`}>
                Cast
              </Link>
            </li>
            <li>
              <Link className={styles.info__link} to={`/movies/${id}/reviews`}>
                Reviews
              </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default AboutMovie;
