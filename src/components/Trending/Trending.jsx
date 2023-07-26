import { Link } from 'react-router-dom';
import styles from './trending.module.scss';
import { useLocation } from 'react-router-dom';

const Trending = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies.map(({ id, title, name }) => (
        <li className={styles.item} key={id}>
          <Link
            className={styles.link}
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            {title ?? name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default Trending;
