import { useEffect, useState, Suspense } from "react";
import { getCategories } from "../services/fetchMovies";
import { Link, Outlet, useParams } from "react-router-dom";
import styles from "../components/styled/movies.module.scss";
import NotFound from "../components/NotFound/NotFound";

const Movies = () => {
  const [categories, setCategories] = useState([]);
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <div className={styles.movies}>
      <h1 className={styles.movies__title}>Search by categories</h1>
      <ul className={styles.categories}>
        {categories.map(({ id, name }) => (
          <li
            className={
              category === name
                ? styles.categories__item_active
                : styles.categories__item
            }
            key={id}
          >
            <Link className={styles.categories__link} to={`/movies/${name}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      {!category && <NotFound text="Please, select the category" />}
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Movies;
