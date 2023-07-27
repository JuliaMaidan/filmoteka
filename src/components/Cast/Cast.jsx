// import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import styles from './cast.module.scss';
import { getCast } from '../../services/fetchMovies';
// import Avatar from 'react-avatar-generator';
import avatar from '../../images/placeholder-person.png';

const Cast = ({ id }) => {
  const [cast, setCast] = useState([]);
  const [visibleHeroes, setVisibleHeroes] = useState(9);
  const [showMoreButton, setShowMoreButton] = useState(true);

  const showMoreHeroes = () => {
    const totalHeroes = cast.length;
    const remainingHeroes = totalHeroes - visibleHeroes;
    const nextVisibleHeroes = Math.min(visibleHeroes + 9, totalHeroes);

    setVisibleHeroes(nextVisibleHeroes);

    if (remainingHeroes <= 9) {
      setShowMoreButton(false);
    }
  };

  const hideHeroes = () => {
    setVisibleHeroes(9);
    setShowMoreButton(true);
  };

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await getCast(id);
        setCast(cast.cast);
      } catch (error) {
        console.log('Помилка при отриманні cast:', error);
      }
    };
    fetchCast();
  }, [id]);
  const url = `https://image.tmdb.org/t/p/w780/`;
  return (
    <div className={styles.cast__wrapper}>
      <p className={styles.cast__title}>Starring</p>
      <ul className={styles.cast}>
        {cast
          .slice(0, visibleHeroes)
          .map(({ name, profile_path, character, id }) => (
            <li className={styles.cast__item} key={id}>
              {profile_path ? (
                <img
                  className={styles.cast__img}
                  src={`${url}${profile_path}`}
                  alt={name}
                  width="200"
                />
              ) : (
                <img
                  className={styles.cast__img}
                  src={avatar}
                  alt={name}
                  width="200"
                />
              )}
              <p className={styles.cast__name}>{name}</p>
              <p className={styles.cast__character}>Character:</p>
              <p className={styles.cast__hero}>{character}</p>
            </li>
          ))}
      </ul>
      <div className={styles.cast__btns}>
        {showMoreButton && (
          <button className={styles.cast__more} onClick={showMoreHeroes}>
            Show more
            <BiSolidDownArrow className={styles.cast__svg} size={11} />
          </button>
        )}
        {visibleHeroes > 9 && (
          <button className={styles.cast__hide} onClick={hideHeroes}>
            Hide
            <BiSolidUpArrow className={styles.cast__svg} size={11} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Cast;
