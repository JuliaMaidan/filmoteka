import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { getSearchedMovies } from "../../services/fetchMovies";
import styles from "../styled/moviesByGenre.module.scss";
import { FaSearch } from "react-icons/fa";
import NotFound from "../NotFound/NotFound";
import PostersList from "../PostersList/PostersList";
import Paginator from "../Paginator/Paginator";

const Search = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const query = searchParams.get("query") ?? "";
    if (!query) return;
    const fetchSearchedMovies = async () => {
      try {
        const searchedMovies = await getSearchedMovies(query, currentPage);
        setMovies(searchedMovies.results);
        setTotalPages(searchedMovies.total_pages);
        console.log(searchedMovies);
      } catch (error) {
        console.log(error);
        setSearchParams("");
      }
    };
    fetchSearchedMovies();
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
    <div>
      <p className="title">Search</p>
      <form className={styles.form} action="submit" onSubmit={handleSubmit}>
        <input className={styles.input} type="text" onChange={handleChange} />
        <button className={styles.btn}>
          <FaSearch className={styles.btnLabel} />
        </button>
      </form>
      <div className={styles.container}>
        {movies.length === 0 ? (
          <NotFound text="Search by key-word" />
        ) : (
          <>
            <PostersList movies={movies} />
            <Paginator
              count={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
