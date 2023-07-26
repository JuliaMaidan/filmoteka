// import Search from "../components/Search/Search";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { getSearchedMovies } from "../services/fetchMovies";
import { CiSearch } from "react-icons/ci";
import NotFound from "../components/NotFound/NotFound";
import PostersList from "../components/PostersList/PostersList";
import Paginator from "../components/Paginator/Paginator";
import styles from "../components/styled/search.module.scss";
import Loader from "../components/Loader/Loader";

const Search = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = searchParams.get("query") ?? "";
    if (!query) return;
    const fetchSearchedMovies = async () => {
      try {
        const searchedMovies = await getSearchedMovies(query, currentPage);
        setMovies(searchedMovies.results);
        setTotalPages(searchedMovies.total_pages);
        setIsLoading(true);
        console.log(searchedMovies);
        // setIsLoading(false);
      } catch (error) {
        console.log(error);
        setSearchParams("");
      }
    };
    fetchSearchedMovies();
    setIsLoading(false);
  }, [searchParams, setSearchParams, currentPage]);

  const handleChange = (e) => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
    async function fetchSearchedMovies() {
      try {
        const searchedMovies = await getSearchedMovies(query, currentPage);
        setMovies(searchedMovies.results);
        setTotalPages(searchedMovies.total_pages);
      } catch (error) {
        console.log(error);
        setSearchParams("");
      }
    }
    fetchSearchedMovies();
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.container}>
      <form className={styles.search} action="submit" onSubmit={handleSubmit}>
        <input
          className={styles.search__input}
          type="text"
          onChange={handleChange}
        />
        <button className={styles.search__btn}>
          <CiSearch className={styles.search__svg} size={22} />
        </button>
      </form>
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
        {/* {movies.length > 0 ? (
          <Loader />
        ) : (
          <div>
            <PostersList movies={movies} />
            <Paginator
              count={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Search;
