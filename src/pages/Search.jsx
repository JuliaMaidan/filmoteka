// import Search from "../components/Search/Search";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { getSearchedMovies } from '../services/fetchMovies';
import { CiSearch } from 'react-icons/ci';
import NotFound from '../components/NotFound/NotFound';
import PostersList from '../components/PostersList/PostersList';
import Paginator from '../components/Paginator/Paginator';
import styles from '../components/styled/search.module.scss';
import Loader from '../components/Loader/Loader';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

const Search = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;
    const fetchSearchedMovies = async () => {
      try {
        setIsLoading(true);
        const searchedMovies = await getSearchedMovies(query, currentPage);
        setMovies(searchedMovies.results);
        setTotalPages(searchedMovies.total_pages);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setSearchParams('');
      }
    };
    fetchSearchedMovies();
  }, [searchParams, setSearchParams, currentPage]);

  const handleSubmit = async values => {
    const { query } = values;
    navigate(`/search?query=${query}`);
    try {
      const searchedMovies = await getSearchedMovies(query, currentPage);
      setMovies(searchedMovies.results);
      setTotalPages(searchedMovies.total_pages);
      // setIsLoading(true);
    } catch (error) {
      console.log(error);
      setSearchParams('');
    }
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const schema = yup.object().shape({
    query: yup
      .string()
      .matches(/^[a-zA-Z\s'-]*$/, 'Please, use only letters, -, ".')
      .min(3)
      .max(30)
      .required(),
  });

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ query: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.search}>
            <Field
              className={styles.search__input}
              type="text"
              name="query"
              placeholder="search.."
              // onChange={handleChange}
            />
            <button type="submit" className={styles.search__btn}>
              <CiSearch className={styles.search__svg} size={22} />
            </button>
            <ErrorMessage
              name="query"
              component="div"
              className={styles.search__error} // Стилі для відображення помилки
            />
          </Form>
        )}
      </Formik>

      <div className={styles.wrapper}>
        {movies.length === 0 && <NotFound text="Search by key-word" />}
        {isLoading && <Loader />}
        {movies.length > 0 && (
          <div>
            <PostersList movies={movies} />
            <Paginator
              count={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
