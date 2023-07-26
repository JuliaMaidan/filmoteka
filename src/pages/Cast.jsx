import { useParams, Link } from 'react-router-dom';
import { getCast } from 'components/services/fetchMovies';
import { useState, useEffect } from 'react';
import styles from './cast.module.scss';

const Cast = () => {
  const [cast, setCast] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchCast() {
      const data = await getCast(id);
      setCast(data);
      setIsLoading(true);
      console.log(data);
    }
    fetchCast();
  }, [id]);

  return (
    <div>
      <Link to={`/movies/${id}`}>
        <button className={styles.collapse}>Collapse</button>
      </Link>
      {!isLoading && <h1>Loading</h1>}
      {isLoading && (
        <div>
          <ul className={styles.list}>
            {cast.cast.map(({ id, name, character, profile_path }) => (
              <li className={styles.item} key={id}>
                <img
                  className={styles.img}
                  src={`https://image.tmdb.org/t/p/w780/${profile_path}`}
                  alt={name}
                  height="180"
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.hero}>Character: {character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Cast;
