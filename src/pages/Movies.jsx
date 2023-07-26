import { getSearchedMovies } from '../components/services/fetchMovies';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './movies.module.scss';
import { FaSearch } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const Movies = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    try {
      getSearchedMovies(query).then(response => setMovies(response.results));
    } catch (error) {
      console.log(error);
      setSearchParams('');
    }
  }, [searchParams, setSearchParams]);

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    async function fetchMovies() {
      const data = await getSearchedMovies(query);
      setMovies(data.results);
      navigate(`/movies?query=${query}`, { replace: true });

      if (data.results.length === 0) {
        return toast.error('We don`t have any matches(');
      }
    }
    fetchMovies();
  };

  const elements = movies.map(({ title, name, id }) => (
    <li className={styles.item} key={id}>
      <Link
        className={styles.link}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        {title ?? name}
      </Link>
    </li>
  ));

  return (
    <div>
      <form className={styles.form} action="submit">
        <input className={styles.input} type="text" onChange={handleChange} />
        <button className={styles.btn} onClick={handleSubmit}>
          <Link to={`/movies?query=${query}`}>
            <FaSearch className={styles.btnLabel} />
          </Link>
        </button>
      </form>
      <ul className={styles.list}>{elements}</ul>
      <ToastContainer />
    </div>
  );
};

export default Movies;
