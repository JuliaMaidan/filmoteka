import { Link } from 'react-router-dom';
import { BsInfo } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import styles from './watchingList.module.scss';

const WatchingList = ({ movies, onDeleteClick }) => {
  return (
    <ul className={styles.mylist}>
      {movies.map(({ id, title, poster_path }) => (
        <li className={styles.mylist__item} key={id}>
          <img
            className={styles.mylist__img}
            src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
            alt={title}
            // width="205"
          />
          <p className={styles.mylist__title}>{title}</p>
          <div className={styles.mylist__btns}>
            <button className={styles.mylist__btn}>
              <Link to={`/movie/${id}`}>
                <BsInfo size={30} className={styles.mylist__svg} />
              </Link>
            </button>
            <button
              className={styles.mylist__btn}
              onClick={() => onDeleteClick(id)}
            >
              <AiOutlineDelete size={22} className={styles.mylist__svg} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default WatchingList;
