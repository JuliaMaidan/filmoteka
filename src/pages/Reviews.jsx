import { useParams, Link } from 'react-router-dom';
import { getReviews } from 'components/services/fetchMovies';
import { useState, useEffect } from 'react';
import styles from './reviews.module.scss';

const Reviews = () => {
  const [reviews, setReviews] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      const data = await getReviews(id);
      setReviews(data);
      setIsLoading(true);
    }
    fetchReviews();
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
            {reviews.results.length === 0 && (
              <p>We don't have any reviews for this movie.</p>
            )}
            {reviews.results.map(({ id, author, content }) => (
              <li className={styles.link} key={id}>
                <p className={styles.author}>Author: {author}</p>
                <p className={styles.text}>{content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Reviews;
