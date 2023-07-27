import styles from './posterList.module.scss';
import { Link } from 'react-router-dom';
import { BsInfo } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';

const PostersList = ({ movies }) => {
  return (
    <div>
      <ul className={styles.movies}>
        {movies.map(({ id, title, poster_path, vote_average }) => (
          <li className={styles.movies__item} key={id}>
            <div className={styles.movies__wrapper}>
              <img
                src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
                alt={title}
                // height="300"
                className={styles.movies__img}
              />
              <p className={styles.movies__name}>{title}</p>
              <button className={styles.movies__btn}>
                <Link to={`/movie/${id}`}>
                  <BsInfo size={36} className={styles.movies__svg} />
                </Link>
              </button>
              <div className={styles.movies__rate}>
                <AiFillStar className={styles.movies__rate_svg} />
                <p className={styles.movies__vote}>{vote_average.toFixed(1)}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostersList;
