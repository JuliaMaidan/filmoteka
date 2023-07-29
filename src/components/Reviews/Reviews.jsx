import { useState, useEffect } from 'react';
import { getReviews } from '../../services/fetchMovies';
import styles from './reviews.module.scss';

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [expandedComments, setExpandedComments] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getReviews(id);
        setReviews(reviews.results);
        console.log(reviews);
      } catch (error) {
        console.log('Помилка при отриманні reviews:', error);
      }
    };
    fetchReviews();
  }, [id]);

  const handleToggle = id => {
    if (expandedComments.includes(id)) {
      setExpandedComments(prevExpandedComments =>
        prevExpandedComments.filter(commentId => commentId !== id)
      );
    } else {
      setExpandedComments(prevExpandedComments => [
        ...prevExpandedComments,
        id,
      ]);
    }
  };

  return (
    <div className={styles.reviews__wrapper}>
      <p className={styles.reviews__title}>Reviews</p>
      <ul className={styles.reviews}>
        {reviews.length === 0 && (
          <p className="notfound_text">
            We don't have any reviews for this movie.
          </p>
        )}
        {reviews.map(({ id, author, content, created_at }) => (
          <li className={styles.reviews__item} key={id}>
            <p className={styles.reviews__author}>Author: {author}</p>
            {content.length <= 270 ? (
              <p className={styles.reviews__text}>{content}</p>
            ) : (
              <>
                <p className={styles.reviews__text}>
                  {expandedComments.includes(id)
                    ? content
                    : `${content.slice(0, 270)}...`}
                </p>
                <button
                  className={styles.reviews__btn}
                  onClick={() => handleToggle(id)}
                >
                  {expandedComments.includes(id) ? 'Hide' : 'Read more'}
                </button>
              </>
            )}
            <p className={styles.reviews__date}>{created_at}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
